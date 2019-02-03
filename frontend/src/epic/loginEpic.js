import { ofType } from 'redux-observable';
import { LOG_IN, IS_LOG_IN } from '../reducer/loginlogoutreducer';
import { map, flatMap, tap } from 'rxjs/operators';

function loginEpic(action$, state$){
    return action$.pipe(
        ofType(LOG_IN),
        tap(console.log),
        flatMap(({payload}) => 
            fetch('/json_login', {
                headers: {'Content-type': 'application/json'},
                method: 'POST',
                body: JSON.stringify(payload),
                credentials: 'include'
            })
        ),
        tap(console.log),
        map(()=> ({type: IS_LOG_IN}))
    );
}

export default loginEpic;