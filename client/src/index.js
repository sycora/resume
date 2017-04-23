import App from './containers/App';
import './index.css';
import {configureStore} from './store';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';

const store = configureStore();

const render = (App) =>
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

window.loaded = function() {
  window.IN.Event.on(window.IN, 'auth', () => store.dispatch({
    type: 'RECEIVE_AUTH',
    item: window.IN.User.getMemberId(),
    receivedAt: Date.now()
  }));

  render(App);
}


if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const nextApp = require('./containers/App').default;
    render(nextApp);
  });
}
