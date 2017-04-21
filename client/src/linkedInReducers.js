import {combineReducers} from 'redux';

const auth = (state = {}, action) => {
  return {
    ...state,
    access_token: window.sessionStorage.getItem('access_token'),
    expires_in: window.sessionStorage.getItem('expires_in')
  };
}

const initialProfileState = {
  isFetching: false,
  didInvalidate: false,
  profile: null
};

const profile = (state = initialProfileState, action) => {
  switch (action.type) {
    case 'INVALIDATE_PROFILE':
      return {
        ...state,
        didInvalidate: true
      };
    case 'REQUEST_PROFILE':
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case 'RECEIVE_PROFILE':
      return {
        ...state,
        didInvalidate: false,
        isFetching: false,
        lastUpdated: action.receivedAt,
        profile: action.profile
      };
    default:
     return state;
  }
}

export const reducers = combineReducers({
  auth: auth,
  profile: profile
});
