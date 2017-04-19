export const saveAuthToken = (token) => {
  window.sessionStorage.authToken = token;
}

export const loadAuthToken = () => {
  if (window.sessionStorage.authToken) {
    // bad bad
    return {
      auth: {
        token: window.sessionStorage.authToken
      }
    };
  } else {
    return {};
  }
}
