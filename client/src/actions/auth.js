export const invalidateAuth = () => ({
  type: 'INVALIDATE_AUTH',
})

const fetchAuth = state => dispatch => {
  dispatch({type: 'REQUEST_AUTH'});
  window.IN.User.authorize();
  window.IN.Event.on(window.IN, 'auth', dispatch({
    type: 'RECEIVE_AUTH',
    item: window.IN.User.getMemberId(),
    receivedAt: Date.now()
  }));
};

const shouldFetchAuth = state => {
  const auth = state.auth;
  if (auth.isFetching) {
    return false;
  }
  if (!auth.id) {
    return true;
  }
  return auth.didInvalidate;
}

export const fetchAuthIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchAuth(getState())) {
      return dispatch(fetchAuth(getState()));
    }
  }
};

export const logout = () => dispatch => {
  window.IN.User.logout();
  dispatch({type: 'LOGOUT'})
};