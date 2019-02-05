import { ofType } from "redux-observable";
import { map, withLatestFrom, switchMap, flatMap, tap } from 'rxjs/operators';
import { of } from "rxjs";

export const ADD_AD = 'ADD_AD';
function formNormalization([payload, state]){
    const ownerId = state.login.detail.owner.id;
    return {...payload, ownerId};
}
function addAdEpic(action$, state$) {
    return action$.pipe(
        ofType(ADD_AD),
        // extract payload
        map(action => action.payload),
        withLatestFrom(state$),
        map(formNormalization),
        switchMap(reqBody => fetch('/api/establishment_ad', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(reqBody)
        })),
        switchMap(r => r.json()),
        tap(console.log),
        flatMap(r => of())
    );
}

export default addAdEpic;