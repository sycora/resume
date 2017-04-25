import './App.css';
import Profile from './Profile';
import SignInButton from '../components/SignInButton';
import {authLoader, logout} from '../actions/authLoader';
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
      authLoader,
      isFetching,
      logout
    } = this.props;
    const isEmpty = auth == null;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Résumé</h2>
        </div>
        <p className="App-intro">
          {!isFetching &&
            <SignInButton id={auth.id} signInClick={authLoader} signOutClick={logout}/>
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
  authLoader,
  logout
})(App)
