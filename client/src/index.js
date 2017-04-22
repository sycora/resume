import App from './containers/App';
import './index.css';
import {configureStore} from './store';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';

const store = configureStore();

window.loaded = function() {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <div>
          <Route path="/" component={App} />
        </div>
      </HashRouter>
    </Provider>,
    document.getElementById('root')
  );
}
