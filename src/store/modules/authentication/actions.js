import { actionTypes } from "./types";
import * as apiService from '../../../services/authetication';
import { history } from '../../../helpers/history';

export function onLoginRequest(user) {
  return {
    type: actionTypes.onLoginRequest,
    payload: {
      user
    }
  }
}

export function onLoginSuccess(user) {
  return {
    type: actionTypes.onLoginSuccess,
    payload: {
      user
    }
  }
}

export function onLoginfailure(error) {
  return {
    type: actionTypes.onLoginFailure,
    payload: {
      error
    }
  }
}

export function onLogout() {
  return {
    type: actionTypes.onLogout,
  }
}

export function login(email, password) {
  return dispatch => {
    apiService.login(email, password)
    .then(response => {
      localStorage.setItem('@redux:user', JSON.stringify(response));
      dispatch(onLoginSuccess(response))
      history.push('/');
    }).catch(error => {
      localStorage.removeItem('@redux:user')
      dispatch(onLoginfailure(error.response.data))
    })
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('@redux:user')
    dispatch(onLogout())
    history.push('/login');
  }
}