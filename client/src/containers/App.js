import './App.css';
import Profile from '../components/Profile';
import SignInButton from '../components/SignInButton';
import logo from './logo.svg';
import {fetchProfileIfNeeded} from '../linkedInActions';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchProfileIfNeeded())
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile !== this.props.profile) {
      const {dispatch} = nextProps
      dispatch(fetchProfileIfNeeded())
    }
  }

  render() {
    const {
      profile,
      isFetching,
      lastUpdated
    } = this.props;

    const isEmpty = profile == null;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Resume</h2>
        </div>
        <p className="App-intro">
          {!isFetching &&
            <SignInButton />
          }
        </p>
        {isEmpty
          ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <p style={{ opacity: isFetching ? 0.5 : 1 }}>
              <Profile {...profile} />
            </p>
        }
      </div>
    );
  }
}

const reduxStateToProps = state => {
  const { profile } = state
  const {
    isFetching,
    lastUpdated
  } = profile || {
    isFetching: true,
    profile: null
  }

  return {
    profile,
    isFetching,
    lastUpdated
  }
}

export default connect(reduxStateToProps)(App);
