import { AuthTypes } from './types'

const initialState = {
  authToken: null,
  user: {},
  hasError: false,
  errorMsg: ''
}

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case AuthTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        hasError: false,
        errorMsg: ''
      }
    case AuthTypes.SIGN_IN_SUCCESS:
      const { authToken, user } = action.payload
      return {
        ...state,
        user,
        authToken,
        hasError: false
      }
    case AuthTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        hasError: true,
        errorMsg: action.payload
      }
    case AuthTypes.SIGN_IN_FORBIDDEN:
      return {
        ...state,
        hasError: true,
        isSigned: false,
        errorMsg: action.payload
      }
    case AuthTypes.LOGOUT:
    case AuthTypes.SIGN_IN_RESET:
      return initialState
    default:
      return state
  }
}
