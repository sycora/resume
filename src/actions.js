export function setAuth(token) {
  return {
    type: 'SET_AUTH_TOKEN',
    token: token
  }
}

export function setCSRF(csrf) {
  return {
    type: 'SET_CSRF',
    csrf: csrf
  }
}
