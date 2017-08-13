import {profileLoader} from '../actions/profileLoader';
import PageWelcome from '../components/PageWelcome';
import User from '../components/User';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import MediaQuery from 'react-responsive';

class Profile extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.id) {
      this.props.profileLoader();
    }
  }

  render() {
    const {
      auth,
      me,
      isFetching
    } = this.props;
    const profile = me.profile;
    return auth.id ? (
      <div>
        {!profile
          ? (isFetching ? <h3>Getting profile...</h3> : <h3>No profile.</h3>)
          : <User {...profile} />
        }
      </div>
    ) : (
      <MediaQuery minWidth={960}><PageWelcome/></MediaQuery>
    );
  }
}

const reduxStateToProps = state => {
  const {
    auth,
    me
  } = state;

  const {
    isFetching
  } = me;

  return {
    auth,
    me,
    isFetching
  }
}

export default connect(reduxStateToProps, {
  profileLoader
})(Profile)
