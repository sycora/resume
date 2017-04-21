export const invalidateProfile = profile => ({
  type: 'INVALIDATE_PROFILE',
})

export const receiveProfile = profile => ({
  type: 'RECEIVE_PROFILE',
  profile: profile,
  receivedAt: Date.now()
});

export const requestProfile = () => ({type: 'REQUEST_PROFILE'});

const fetchProfile = state => dispatch => {
  dispatch(requestProfile(state))
  return fetch('https://api.linkedin.com/v1/people/~', {
    headers: {
      'Authorization': `Bearer ${state.auth.access_token}`,
      'x-li-format': 'json'
    }
  })
  .then(response => response.json())
  .then(json => dispatch(receiveProfile(json)))
};

const shouldFetchProfile = state => {
  const profile = state.profile;
  if (!profile) {
    return true;
  } else if (profile.isFetching) {
    return false;
  } else {
    return profile.didInvalidate;
  }
}

export const fetchProfileIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchProfile(getState())) {
      return dispatch(fetchProfile(getState()));
    }
  }
};
