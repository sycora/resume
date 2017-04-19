import React, { Component } from 'react';
import qs from 'qs';

const randomString = length => {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

class SignInButton extends Component {
  // code=AQT_5lXA30eWBiWi9i0jLHGblni7qBTovf19Onu-f75o8hURzGOBtsZDTrVA4oKRQhPlopbcO9sRgxy8iRdXgpYhYhwl-nK4A8PTI-uqpO7atpV5GRA
  // &state=wofYHr64
  static defaultProps = {
    client_id: '77oc2rb90riu2a',
    response_type: 'code',
    redirect_uri: window.location.origin + '/auth',
    scope: 'r_basicprofile'
  }

  signInClick() {
    window.sessionStorage.csrf = randomString(8);
    let options = {
      ...this.props,
      state: window.sessionStorage.csrf
    };
    window.location = 'https://www.linkedin.com/oauth/v2/authorization?' + qs.stringify(options);
  }

  render() {
    if (window.sessionStorage.authToken) {
      return null;
    } else {
      return (
        <button onClick={() => this.signInClick()}>Sign In</button>
      );
    }
  }
}

export default SignInButton;
