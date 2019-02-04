import { ofType } from "redux-observable";
import { switchMap, map } from "rxjs/operators";
import { LOGIN_DETAIL_RETRIVED } from "../reducer/loginlogoutreducer";

export const FETCH_LOGIN_DETAIL = 'FETCH_LOGIN_DETAIL';

function loginDetailEpic(action$, state$){
    return action$.pipe(
        ofType(FETCH_LOGIN_DETAIL),
        switchMap(
            () => fetch('/api/userinfo', {credentials: 'include'})
        ),
        switchMap(r => r.json()),
        map(payload => ({type: LOGIN_DETAIL_RETRIVED, payload: payload}))
    );
}

export default loginDetailEpic;