import './App.css';
import Profile from './Profile';
import SignInButton from '../components/SignInButton';
import logo from './logo.svg';
import {fetchAuthIfNeeded, logout} from '../actions/auth';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  render() {
    const {
      auth,
      fetchAuthIfNeeded,
      isFetching,
      logout
    } = this.props;
    const isEmpty = auth == null;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Resume</h2>
        </div>
        <p className="App-intro">
          {!isFetching &&
            <SignInButton id={auth.id} signInClick={fetchAuthIfNeeded} signOutClick={logout}/>
          }
        </p>
        {isEmpty
          ? (isFetching ? <h2>Logging in...</h2> : <h2>Empty.</h2>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <Profile />
            </div>
        }
      </div>
    );
  }
}

const reduxStateToProps = state => {
  const {
    auth,
    isFetching
  } = state;

  return {
    auth,
    isFetching
  }
}

export default connect(reduxStateToProps, {
  fetchAuthIfNeeded,
  logout
})(App)
