import App from './containers/App';
import './index.css';
import reducers from './reducers';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk';

window.loaded = function() {
  ReactDOM.render(
    <Provider store={createStore(
      reducers,
      applyMiddleware(thunk, createLogger())
    )}>
      <HashRouter>
        <div>
          <Route path="/" component={App} />
        </div>
      </HashRouter>
    </Provider>,
    document.getElementById('root')
  );
}
