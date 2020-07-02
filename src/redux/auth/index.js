import { AuthTypes } from './types';

const initialState = {
  authToken: null,
  user: {},
  isSignIn: false,
  isSigned: false,
  hasError: false,
  errorMsg: '',
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case AuthTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        isSignIn: true,
        hasError: false,
        errorMsg: '',
      };
    case AuthTypes.SIGN_IN_SUCCESS:
      const { authToken, user } = action.payload;
      return {
        ...state,
        user,
        authToken,
        isSigned: true,
        isSignIn: false,
        hasError: false,
      };
    case AuthTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        isSignIn: false,
        hasError: true,
        errorMsg: action.payload,
      };
    case AuthTypes.SIGN_IN_FORBIDDEN:
      return {
        ...state,
        hasError: true,
        isSignIn: false,
        isSigned: false,
        errorMsg: action.payload,
      };
    case AuthTypes.LOGOUT:
    case AuthTypes.SIGN_IN_RESET:
      return initialState;
    default:
      return state;
  }
}
