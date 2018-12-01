import {combineEpics} from 'redux-observable';
import loginEpic from './loginEpic';
import logoutEpic from './logoutEpic';

const rootEpic = combineEpics(loginEpic, logoutEpic);
export default rootEpic;