export const SEARCH_DATE_CHANGE = 'SEARCH_DATE_CHANGE';
export const SEARCH_RESULT_UPDATE = 'SEARCH_RESULT_UPDATE';

function reducer(state = {date: [], result: []}, action){
    const {type, payload} = action;
    // console.log(action);
    switch(type){
        case SEARCH_DATE_CHANGE:
            return Object.assign({}, state, {date: payload});
        case SEARCH_RESULT_UPDATE:
            return Object.assign({}, state, {result: payload});
        default:
            return state;
    }
    
}

export default reducer;