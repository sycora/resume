import PropTypes from 'prop-types';
import qs from 'qs';
import {setAuthCode} from './actions';
import {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthCode: code => {
      dispatch(setAuthCode(code));
    }
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    authCode: state.auth.code,
    oauthOptions: state.auth.oathOptions,
    csrf: state.auth.csrf,
    queryParams: ownProps.location.search.substr(1),
  }
}

class Authenticator extends Component {
  static propTypes = {
    authCode: PropTypes.string,
    csrf: PropTypes.string,
    history:  PropTypes.object.isRequired,
    oauthOptions: PropTypes.object.isRequired,
    queryParams: PropTypes.string.isRequired
  }

  componentDidMount() {
    let {
      csrf,
      history,
      queryParams,
      setAuthCode
    } = this.props;
    const q = qs.parse(queryParams);
    if (q && q.code && csrf === q.state) {
      setAuthCode(q.code);
      // TODO: check whether access token is already available
      this.requestAccessToken();
      history.push('/');
    } else {
      console.error('bad login', this.props, q);
    }
  }

  requestAccessToken() {
    let {
      authCode,
      oauthOptions
    } = this.props;
    // let formData = new FormData();
    let form = {
      grant_type: 'authorization_code',
      code: authCode,
      redirect_uri: oauthOptions.redirect_uri,
      client_id: oauthOptions.client_id
    };

    let myRequest = new Request('https://us-central1-sycora-resume.cloudfunctions.net/accessToken', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(form)
    });

    fetch(myRequest)
      .then((response) => {
        if (response.status === 200) {
          return console.log(response);
        } else {
          console.log('An error occurred accessing the api server')
        }
      })
  }

  render() {
    return null;
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Authenticator));
