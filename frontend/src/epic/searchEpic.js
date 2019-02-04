import { ofType } from "redux-observable";
import { withLatestFrom, map, switchMap, tap } from "rxjs/operators";
import { SEARCH_RESULT_UPDATE } from "../reducer/searchreducer";
export const SEARCH_CLICK = 'SEARCH_CLICK';

function fetchSearchResult([keyword, dates]) {
    const bodyStr = `{ \"availablePeriod\": { \"endDate\": \"${dates[1]}\", \"startDate\": \"${dates[0]}\" }, \"keyword\": \"${keyword}\"}`;
    console.log(bodyStr);
    return fetch("/api/search", {
        body: bodyStr,
        headers: {
            Accept: "*/*",
            "Content-Type": "application/json"
        },
        method: "POST"
    });
}
function searchEpic(action$, state$) {
    return action$.pipe(
        ofType(SEARCH_CLICK),
        tap(console.log),
        map(action => action.payload),
        withLatestFrom(state$),
        map(([keyword, state]) => [keyword, state.search.date]),
        switchMap(fetchSearchResult),
        switchMap(resp => resp.json()),
        map(result => ({ type: SEARCH_RESULT_UPDATE, payload: result }))
    );
}

export default searchEpic;