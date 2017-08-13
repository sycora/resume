import {combineReducers} from 'redux';
import {auth} from './auth';
import {me} from './me';
import {resume} from './resume';

export default combineReducers({
  auth,
  me,
  resume
});
