const initialAuthState = {
  isFetching: false,
  didInvalidate: false
};

export const auth = (state = initialAuthState, action) => {
  switch (action.type) {
    case 'INVALIDATE_AUTH':
      return {
        ...state,
        didInvalidate: true
      };
    case 'REQUEST_AUTH':
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case 'RECEIVE_AUTH':
      return {
        ...state,
        didInvalidate: false,
        isFetching: false,
        lastUpdated: action.receivedAt,
        id: action.item
      };
    case 'LOGOUT':
      return {
        ...state,
        id: null
      }
    default:
     return state;
  }
}
