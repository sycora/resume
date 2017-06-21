import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';

class SignInButton extends Component {
  render() {
    if (this.props.id) {
      return (
        <FlatButton onClick={() => this.props.signOutClick()}>Sign Out</FlatButton>
      );
    } else {
      return (
        <FlatButton style={{padding: 8, height: 60}} onClick={() => this.props.signInClick()}><img src={require('../images/logos/linkedin.png')} alt="sign in with linkedin"  width={160}/></FlatButton>
      );
    }
  }
}

export default SignInButton;
