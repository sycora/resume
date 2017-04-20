import {combineReducers} from 'redux';

const initialState = {};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        loggedIn: true
      });
    case 'SET_AUTH_CODE':
      return Object.assign({}, state, {
        code: action.code
      });
    case 'SET_CSRF':
      return Object.assign({}, state, {
        csrf: action.csrf
      });
    default:
      return state;
  }
}

const getProfile = (state = initialState, action) => {
  return state;
}

export const reducers = combineReducers({
  auth: auth,
  profile: getProfile
});
