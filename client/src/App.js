import './App.css';
import Authenticator from './Authenticator';
import SignInButton from './SignInButton';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';

class Main extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Resume</h2>
        </div>
        <p className="App-intro">
          <SignInButton />
        </p>
      </div>
    );
  }
}
const App = ({store}) =>
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route path="/" component={Main} />
        <Route path="/auth" component={Authenticator} />
      </div>
    </HashRouter>
  </Provider>
;

export default App;
