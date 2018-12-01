import { combineReducers } from 'redux';
import login from './loginlogoutreducer';

const rootReducer = combineReducers({login});
export default rootReducer;