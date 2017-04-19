export const login = (code, state) => ({type: 'LOGIN', code, state})

function receiveProfile(json) {
  console.log(json);
  return {
    type: 'RECEIVE_PROFILE',
    profile: json,
    receivedAt: Date.now()
  }
}

function fetchProfile() {
  return dispatch => {
    dispatch(fetchProfile())
    return fetch(
      `https://api.linkedin.com/v1/people/~`, {
      headers: {
        'Authorization': `Bearer ${window.sessionStorage.authToken}`,
        'x-li-format': 'json'
      })
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}

function shouldFetchProfile(state) {
  const profile = state.profile;
  if (!profile) {
    return true;
  } else if (profile.isFetching) {
    return false;
  } else {
    return profile.didInvalidate;
  }
}

export function fetchProfileIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchProfile(getState())) {
      return dispatch(fetchProfile());
    }
  }
}
