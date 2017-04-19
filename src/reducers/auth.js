const auth = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        loggedIn: true
      });
    case 'SET_AUTH_TOKEN':
      return Object.assign({}, state, {
        token: action.token
      });
    default:
      return state;
  }
}

export default auth;
