import {combineReducers} from 'redux';

const initialState = {};

const auth = (state = initialState, action) => {
  return {
    ...state,
    access_token: window.sessionStorage.getItem('access_token'),
    expires_in: window.sessionStorage.getItem('expires_in')
  };
}

const getProfile = (state = initialState, action) => {
  return state;
}

export const reducers = combineReducers({
  auth: auth,
  profile: getProfile
});
