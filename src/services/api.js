import axios from "axios";
import store from "../store";
import { logout } from "../store/modules/authentication/actions";

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  params: {}
});

api.interceptors.request.use(function (config) {
  const userStringified = localStorage.getItem('@redux:user');

  const user = userStringified ? JSON.parse(userStringified) : '';
 
  config.headers.Authorization = `Bearer ${user.token ?? ''}`;

  return config;
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
   if (error.response.status === 401 && !error.config._retry) {
    localStorage.removeItem('@redux:user');
    store.dispatch(logout())
  }
  
   return Promise.reject(error); 
  }
)