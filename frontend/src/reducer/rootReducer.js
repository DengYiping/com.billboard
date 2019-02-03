import { combineReducers } from 'redux';
import login from './loginlogoutreducer';
import search from './searchreducer';

const rootReducer = combineReducers({login, search});
export default rootReducer;