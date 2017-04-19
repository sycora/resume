import PropTypes from 'prop-types';
import qs from 'qs';
import {setAuth} from './actions';
import {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthToken: token => {
      dispatch(setAuth(token));
    }
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    authToken: state.auth.authToken,
    csrf: window.sessionStorage.csrf,
    queryParams: ownProps.location.search.substr(1),
  }
}

class Authenticator extends Component {
  static propTypes = {
    authToken: PropTypes.string,
    csrf: PropTypes.string,
    history:  PropTypes.object.isRequired,
    queryParams: PropTypes.string.isRequired
  }

  componentDidMount() {
    let {
      csrf,
      history,
      queryParams,
      setAuthToken
    } = this.props;
    const q = qs.parse(queryParams);
    if (q && q.code && csrf === q.state) {
      setAuthToken(q.code);
      history.push('/');
    } else {
      console.error('bad login', this.props, q);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Authenticator));
