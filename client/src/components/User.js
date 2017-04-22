import React, {Component} from 'react';

class User extends Component {
  render() {
    const {
      firstName,
      headline,
      lastName,
      pictureUrl
    } = this.props;
    return (
      <div>
        <h3>{headline}</h3>
        <img alt="profile" src={pictureUrl} />
        <span>{firstName} {lastName}</span>
      </div>
    );
  }
}

export default User;
