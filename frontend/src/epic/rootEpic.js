import {combineEpics} from 'redux-observable';
import loginEpic from './loginEpic';
import logoutEpic from './logoutEpic';
import searchEpic from './searchEpic';
import loginDetailEpic from './loginDetailEpic';
import registrationEpic from './registrationEpic';

const rootEpic = combineEpics(loginEpic, logoutEpic, searchEpic, loginDetailEpic, registrationEpic);
export default rootEpic;