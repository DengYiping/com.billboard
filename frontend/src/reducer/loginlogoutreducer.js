export const LOG_IN = 'LOGED_IN';
export const LOG_OUT = 'LOGED_OUT';

export const IS_LOG_IN = 'IS_LOG_IN';
export const IS_LOG_OUT = 'IS_LOG_OUT';

export default function(state = {isLogedIn: false}, action){
    const {type, username} = action;

    // action for login
    switch(type){
        case IS_LOG_IN:
            return {isLogedIn: true, username};
        case IS_LOG_OUT:
            return {isLogedIn: false}
        default:
            return state;
    }
}