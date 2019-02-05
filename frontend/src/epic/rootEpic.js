import {combineEpics} from 'redux-observable';
import loginEpic from './loginEpic';
import logoutEpic from './logoutEpic';
import searchEpic from './searchEpic';
import loginDetailEpic from './loginDetailEpic';
import registrationEpic from './registrationEpic';
import addAdEpic from './addAdEpic';

const rootEpic = combineEpics(loginEpic, logoutEpic, searchEpic, loginDetailEpic, registrationEpic, addAdEpic);
export default rootEpic;