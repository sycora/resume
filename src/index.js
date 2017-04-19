import App from './App';
import './index.css';
// import {reducers} from './linkedInReducers';
import rootReducer from './reducers';
import {loadAuthToken, saveAuthToken} from './sessionStorage';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

const persistedState = loadAuthToken()

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  if (store.getState().auth.token) {
    saveAuthToken(store.getState().auth.token);
  }
})

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
