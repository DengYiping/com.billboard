import {combineEpics} from 'redux-observable';
import loginEpic from './loginEpic';
import logoutEpic from './logoutEpic';
import searchEpic from './searchEpic';

const rootEpic = combineEpics(loginEpic, logoutEpic, searchEpic);
export default rootEpic;