import { ofType } from 'redux-observable';
import { LOG_IN, IS_LOG_IN, IS_LOG_OUT } from '../reducer/loginlogoutreducer';
import { flatMap, switchMap, catchError} from 'rxjs/operators';
import { of } from 'rxjs';
import { FETCH_LOGIN_DETAIL } from './loginDetailEpic';

function loginEpic(action$, state$){
    return action$.pipe(
        ofType(LOG_IN),
        switchMap(({payload}) => 
            fetch('/json_login', {
                headers: {'Content-type': 'application/json'},
                method: 'POST',
                body: JSON.stringify(payload),
                credentials: 'include'
            })
        ),
        catchError(err => {
            console.log('cannot connect to login server');
            return of({type: IS_LOG_OUT});
        }),
        switchMap(resp => resp.json()),
        // tap(console.log),
        // already loged in, get login detail
        flatMap(json => {
            if(json === 'OK!'){
                return of({type: IS_LOG_IN}, {type: FETCH_LOGIN_DETAIL});
            } else {
                // TODO: should have some logic for login failure
                alert('login is not correct!');
                return of({type: IS_LOG_OUT});
            }
        })
    );
}

export default loginEpic;