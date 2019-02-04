export const LOG_IN = 'LOGED_IN';
export const LOG_OUT = 'LOGED_OUT';

export const IS_LOG_IN = 'IS_LOG_IN';
export const IS_LOG_OUT = 'IS_LOG_OUT';
export const LOGIN_DETAIL_RETRIVED = 'LOGIN_DETAIL_RETRIVED';

export default function(state = {isLogedIn: false}, action){
    const {type, payload} = action;

    // action for login
    switch(type){
        case IS_LOG_IN:
            return {isLogedIn: true};
        case IS_LOG_OUT:
            return {isLogedIn: false};
        case LOGIN_DETAIL_RETRIVED:
            return {isLogedIn: true, detail: payload};
        default:
            return state;
    }
}