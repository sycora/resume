import {profileLoader} from '../actions/profile';
import User from '../components/User';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Profile extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.id) {
      this.props.profileLoader();
    }
  }

  render() {
    const {
      me,
      isFetching
    } = this.props;
    const profile = me.profile;
    return (
      <div>
        {!profile
          ? (isFetching ? <h3>Getting profile...</h3> : <h3>No profile.</h3>)
          : <User {...profile} />
        }
      </div>
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
