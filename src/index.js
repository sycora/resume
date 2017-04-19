import App from './App';
import './index.css';
import {reducers} from './linkedInReducers';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

const store = createStore(reducers);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
