import {setOAuthOptions} from './actions';
import App from './App';
import './index.css';
// import {reducers} from './linkedInReducers';
import rootReducer from './reducers';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

export const saveAuth = (auth) => {
  window.sessionStorage.setItem('auth', JSON.stringify(auth));
}

export const loadAuth = () => {
  if (window.sessionStorage.getItem('auth')) {
    try {
      return {auth: JSON.parse(window.sessionStorage.auth)};
    } catch (err) {
      console.log('failed to parse object auth', err);
      return {auth: {}};
    }
  } else {
    return {auth: {}};
  }
}

const persistedState = loadAuth();
const store = createStore(
  rootReducer,
  persistedState
);

store.subscribe(() => {
  if (Object.keys(store.getState().auth).length) {
    saveAuth(store.getState().auth);
  }
});

// code=AQT_5lXA30eWBiWi9i0jLHGblni7qBTovf19Onu-f75o8hURzGOBtsZDTrVA4oKRQhPlopbcO9sRgxy8iRdXgpYhYhwl-nK4A8PTI-uqpO7atpV5GRA
// &state=wofYHr64
store.dispatch(setOAuthOptions({
  client_id: '77oc2rb90riu2a',
  response_type: 'code',
  redirect_uri: window.location.origin + '/auth',
  scope: 'r_basicprofile'
}));

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
