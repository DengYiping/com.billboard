import { ofType } from 'redux-observable';
import { LOG_IN, IS_LOG_IN } from '../reducer/loginlogoutreducer';
import { map } from 'rxjs/operators';

function loginEpic(action$, state$){
    return action$.pipe(
        ofType(LOG_IN),
        map(()=> ({type: IS_LOG_IN}))
    )
}

export default loginEpic;