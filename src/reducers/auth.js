const auth = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        loggedIn: true
      });
    case 'SET_AUTH_CODE':
      return Object.assign({}, state, {
        code: action.code
      });
    case 'SET_CSRF':
      return Object.assign({}, state, {
        csrf: action.csrf
      });
    case 'SET_OATH_OPTIONS':
      console.log(Object.assign({}, state, {
        oathOptions: action.oAuthOptions
      }));
      return Object.assign({}, state, {
        oathOptions: action.oAuthOptions
      });
    default:
      return state;
  }
}

export default auth;
