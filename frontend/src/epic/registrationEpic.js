import { ofType } from "redux-observable";
import { map, switchMap, tap, catchError } from 'rxjs/operators';
import { IS_LOG_OUT } from "../reducer/loginlogoutreducer";
import { of } from "rxjs";
export const REGISTRATION_SUBMIT = 'REGISTRATION_SUBMIT';

function omitConfirm(action) {
    const { confirm, ...omitted } = action.payload;
    return omitted;
}

function fetchLeaserRegistration(jsonData) {
    const api = '/api/reg/leaser';
    return fetch(api, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(jsonData)
    });
}

function fetchOwnerRegistration(jsonData) {
    const api = '/api/reg/owner';
    return fetch(api, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(jsonData)
    });
}

function registrationEpic(action$, state$) {
    return action$.pipe(
        ofType(REGISTRATION_SUBMIT),
        map(omitConfirm),
        tap(console.log),
        switchMap(data => {
            if (data.iban) {
                return fetchOwnerRegistration(data);
            } else {
                return fetchLeaserRegistration(data);
            }
        }),
        switchMap(r => r.json()),
        tap(console.log),
        catchError(err => {
            alert('already exist a user');
            return of({type: IS_LOG_OUT});
        }),
        map((resp) => ({ type: IS_LOG_OUT }))
    );
}

export default registrationEpic;