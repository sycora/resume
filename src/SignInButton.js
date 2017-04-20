import {setCSRF} from './actions';
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

const mapDispatchToProps = (dispatch) => {
  return {
    setCSRF: (csrf) => {
      dispatch(setCSRF(csrf))
    }
  }
};

const mapStateToProps = (state) => {
  return {
    authCode: state.auth.code,
    oauthOptions: state.auth.oathOptions
  }
};

class SignInButton extends Component {
  static propTypes = {
    authCode: PropTypes.string,
    setCSRF: PropTypes.func.isRequired
  }

  signInClick() {
    let csrf = randomString(8);
    this.props.setCSRF(csrf);
    let options = {
      ...this.props.oauthOptions,
      state: csrf
    };
    window.location = 'https://www.linkedin.com/oauth/v2/authorization?' + qs.stringify(options);
  }

  render() {
    if (this.props.authCode) {
      return null;
    } else {
      return (
        <button onClick={() => this.signInClick()}>Sign In</button>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInButton);
