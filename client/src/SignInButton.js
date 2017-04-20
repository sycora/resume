import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import qs from 'qs';

const randomString = length => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const mapStateToProps = (state) => {
  return {
    accessToken: state.auth.access_token
  }
};

class SignInButton extends Component {
  static propTypes = {
    accessToken: PropTypes.string
  }

  signInClick() {
    // TODO: move into redux action
    let csrf = randomString(8);
    let options = {
      client_id: '77oc2rb90riu2a',
      response_type: 'code',
      redirect_uri: 'http://resume.sycora.com/auth.html',
      scope: 'r_basicprofile',
      state: csrf
    };
    window.location = 'https://www.linkedin.com/oauth/v2/authorization?' + qs.stringify(options);
  }

  render() {
    if (this.props.accessToken) {
      return null;
    } else {
      return (
        <button onClick={() => this.signInClick()}>Sign In</button>
      );
    }
  }
}

export default connect(mapStateToProps, {})(SignInButton);
