export function setAuthCode(code) {
  return {
    type: 'SET_AUTH_CODE',
    code: code
  }
}

export function setCSRF(csrf) {
  return {
    type: 'SET_CSRF',
    csrf: csrf
  }
}

export function setOAuthOptions(oAuthOptions) {
  return {
    type: 'SET_OAUTH_OPTIONS',
    oAuthOptions: oAuthOptions
  }
}
