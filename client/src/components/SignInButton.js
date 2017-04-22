import React, {Component} from 'react';

class SignInButton extends Component {
  render() {
    if (this.props.id) {
      return (
        <button onClick={() => this.props.signOutClick()}>Sign Out</button>
      );
    } else {
      return (
        <button onClick={() => this.props.signInClick()}>Sign In</button>
      );
    }
  }
}

export default SignInButton;
