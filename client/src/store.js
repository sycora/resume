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
  module.exports.configureStore = () => createStore(
    reducers,
    applyMiddleware(thunk, createLogger()),
  );
}
