const initialProfileState = {
  isFetching: false,
  didInvalidate: false
};

export const me = (state = initialProfileState, action) => {
  switch (action.type) {
    case 'INVALIDATE_PROFILE':
      return {
        ...state,
        didInvalidate: true
      };
    case 'REQUEST_PROFILE':
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case 'RECEIVE_PROFILE':
      return {
        ...state,
        didInvalidate: false,
        isFetching: false,
        lastUpdated: action.receivedAt,
        profile: action.item
      };
    
  case 'LOGOUT':
    return {
      ...state,
      profile: null
    }
    default:
     return state;
  }
}
