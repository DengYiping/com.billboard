import {combineEpics} from 'redux-observable';
import loginEpic from './loginEpic';
import logoutEpic from './logoutEpic';
import searchEpic from './searchEpic';
import loginDetailEpic from './loginDetailEpic';

const rootEpic = combineEpics(loginEpic, logoutEpic, searchEpic, loginDetailEpic);
export default rootEpic;