import { api } from "./api";

export async function login(email, password) {
  const response = await api.post('/login', {
    email, password
  }, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.data) 
    .catch(error => Promise.reject(error))

  return response
}

export async function getProfile() {
  const response = await api.get('/account')
    .then(response => response.data) 
    .catch(error =>  Promise.reject(error))

  return response
}

