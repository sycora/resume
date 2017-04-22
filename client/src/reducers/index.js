import {combineReducers} from 'redux';
import {auth} from './auth';
import {me} from './me';

export default combineReducers({
  auth,
  me
});
