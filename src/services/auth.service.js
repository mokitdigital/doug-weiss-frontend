import axios from 'axios'

export const authService = {
  login
}

const url = 'https://nameless-fjord-67867.herokuapp.com/api'

function login (login) {
  const requestConfig = {
    method: 'GET'
  }

  return axios.post(`${url}/auth/login`, login, requestConfig)
}
