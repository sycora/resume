export const invalidateProfile = profile => ({
  type: 'INVALIDATE_PROFILE',
})

const fetchProfile = state => dispatch => {
  dispatch({type: 'REQUEST_PROFILE'});
  window.IN.API.Raw().url('people::(~):(id,first-name,last-name,maiden-name,formatted-name,phonetic-first-name,phonetic-last-name,formatted-phonetic-name,headline,location,industry,current-share,num-connections,num-connections-capped,summary,specialties,positions,picture-url,picture-urls::(original),site-standard-profile-request,api-standard-profile-request,public-profile-url,email-address)').result((result) => {
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

export const profileLoader = () => {
  return (dispatch, getState) => {
    if (shouldFetchProfile(getState())) {
      return dispatch(fetchProfile(getState()));
    }
  }
};
