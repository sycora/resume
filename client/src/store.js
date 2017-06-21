import reducers from './reducers';
import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk';

if (process.env.NODE_ENV === 'production') {
  module.exports.configureStore = () => createStore(
    reducers,
    applyMiddleware(thunk)
  );
} else {
  module.exports.configureStore = () => {
    const store = createStore(
      reducers,
      applyMiddleware(thunk, createLogger()),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers').default
        store.replaceReducer(nextRootReducer)
      });
    }

    return store;
  }
}
