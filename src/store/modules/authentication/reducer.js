import { actionTypes } from "./types";

const initialUser = localStorage.getItem('@redux:user');

const INITIAL_STATE = {
  user: initialUser ? JSON.parse(initialUser) : null,
  error: {
    message: null,
  },
  loading: false,
};

const authetication = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case actionTypes.onLoginRequest:
      return {...state}
    
    case actionTypes.onLoginSuccess:
      return {
        ...state,
        user: {
          ...action.payload.user
        },
        error: {
          message: null
        }
      }
    
    case actionTypes.onLoginFailure:
      return {
        ...state,
        user: null,
        error: {
          message: action.payload.error.message
        }
      }

    case actionTypes.onLogout:
     
      return {
        ...state,
        user: null,
        error: {
          message: null
        }
      }

    default:
      return state;
  }
}

export default authetication;

