import { ofType } from 'redux-observable';
import { LOG_OUT, IS_LOG_OUT } from '../reducer/loginlogoutreducer';
import { map } from 'rxjs/operators';

function logoutEpic(action$, state$){
    return action$.pipe(
        ofType(LOG_OUT),
        map(()=> ({type: IS_LOG_OUT}))
    )
}

export default logoutEpic;