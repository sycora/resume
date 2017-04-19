import PropTypes from 'prop-types';
import qs from 'qs';
import {Component} from 'react';
import {withRouter} from 'react-router';

class Authenticator extends Component {
  static propTypes = {
    history:  PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  }

  componentDidMount() {
    const q = qs.parse(this.props.location.search.substr(1));
    if (q && q.code && window.sessionStorage.csrf === q.state) {
      window.sessionStorage.authToken = q.code;
      this.props.history.push('/');
    } else {
      console.error('bad login', this.props, window.sessionStorage, q);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(Authenticator);
