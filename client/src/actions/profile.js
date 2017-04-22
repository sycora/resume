export const invalidateProfile = profile => ({
  type: 'INVALIDATE_PROFILE',
})

const fetchProfile = state => dispatch => {
  dispatch({type: 'REQUEST_PROFILE'});
  window.IN.API.Profile('me').result((result) => {
    dispatch({
      type: 'RECEIVE_PROFILE',
      item: result.values[0],
      receivedAt: Date.now()
    });
  });
};

const shouldFetchProfile = state => {
  const me = state.me;
  if (me.isFetching) {
    return false;
  }
  if (!me.profile) {
    return true;
  }
  return me.didInvalidate;
}

export const fetchProfileIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchProfile(getState())) {
      return dispatch(fetchProfile(getState()));
    }
  }
};
