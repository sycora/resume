import {fetchProfileIfNeeded} from '../actions/profile';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Profile extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.id) {
      this.props.fetchProfileIfNeeded();
    }
  }

  render() {
    const {
      me,
      isFetching
    } = this.props;
    const isEmpty = me.profile == null;
    return (
      <div>
        {isEmpty
          ? (isFetching ? <h3>Getting profile...</h3> : <h3>No profile.</h3>)
          : <div>
              <h3>{me.profile.headline}</h3>
              <img alt="profile" src={me.profile.pictureUrl} />
              <span>{me.profile.firstName} {me.profile.lastName}</span>
            </div>
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
  } = me || {
    isFetching: true,
    me: null
  }

  return {
    auth,
    me,
    isFetching
  }
}

export default connect(reduxStateToProps, {
  fetchProfileIfNeeded
})(Profile)
