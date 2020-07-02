import { AuthTypes } from './types'

export function signInRequest(username, password) {
  return {
    type: AuthTypes.SIGN_IN_REQUEST,
    payload: { username, password }
  }
}

export function signInSuccess(authToken, user) {
  return {
    type: AuthTypes.SIGN_IN_SUCCESS,
    payload: { authToken, user }
  }
}

export function signInFailure(errorMsg) {
  return {
    type: AuthTypes.SIGN_IN_FAILURE,
    payload: errorMsg
  }
}

export function logout() {
  return {
    type: AuthTypes.LOGOUT
  }
}

export function signInForbidden(forbiddenMsg) {
  return {
    type: AuthTypes.SIGN_IN_FORBIDDEN,
    payload: forbiddenMsg
  }
}

export function signInResetState() {
  return {
    type: AuthTypes.SIGN_IN_RESET
  }
}
