import { AuthTypes } from './types'

const initialState = {
  authToken: null,
  user: {},
  hasError: false,
  errorMsg: ''
}

const reducerMap = {
  [AuthTypes.SIGN_IN_REQUEST]: (state, action) => ({
    ...state,
    hasError: false,
    errorMsg: ''
  }),
  [AuthTypes.SIGN_IN_SUCCESS]: (state, action) => ({
    ...state,
    user: action.user,
    authToken: action.authToken,
    hasError: false
  }),
  [AuthTypes.SIGN_IN_FAILURE]: (state, action) => ({
    ...state,
    hasError: true,
    errorMsg: action.payload
  }),
  [AuthTypes.SIGN_IN_FORBIDDEN]: (state, action) => ({
    ...state,
    hasError: true,
    isSigned: false,
    errorMsg: action.payload
  }),
  [AuthTypes.LOGOUT]: () => initialState
}

export const authReducer = (state = initialState, action) =>
  reducerMap[action.type] ? reducerMap[action.type](state, action) : state

// export function authReducer(state = initialState, action) {
//   switch (action.type) {
//     case AuthTypes.SIGN_IN_REQUEST:
//       return {
//         ...state,
//         hasError: false,
//         errorMsg: ''
//       }
//     case AuthTypes.SIGN_IN_SUCCESS:
//       const { authToken, user } = action.payload
//       return {
//         ...state,
//         user,
//         authToken,
//         hasError: false
//       }
//     case AuthTypes.SIGN_IN_FAILURE:
//       return {
//         ...state,
//         hasError: true,
//         errorMsg: action.payload
//       }
//     case AuthTypes.SIGN_IN_FORBIDDEN:
//       return {
//         ...state,
//         hasError: true,
//         isSigned: false,
//         errorMsg: action.payload
//       }
//     case AuthTypes.LOGOUT:
//     case AuthTypes.SIGN_IN_RESET:
//       return initialState
//     default:
//       return state
//   }
// }
