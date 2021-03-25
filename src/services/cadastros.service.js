import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config({ silent: process.env.NODE_ENV === 'production' })

export const cadastroService = {
  cadastrosAll,
  createCadastro,
  login
}

const url = 'https://nameless-fjord-67867.herokuapp.com/api'

function login (form) {
  const requestConfig = {
    method: 'POST'
  }

  return axios.post(`${url}/login`, form, requestConfig)
}

function cadastrosAll () {
  const requestConfig = {
    method: 'GET'
  }
  return axios.get(`${url}/cadastros`, requestConfig)
}

function createCadastro (form) {
  const requestConfig = {
    method: 'GET'
  }
  return axios.post(`${url}/cadastros`, form, requestConfig)
}
