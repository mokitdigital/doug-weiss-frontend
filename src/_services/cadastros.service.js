import Vue from 'vue'
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config({ silent: process.env.NODE_ENV === 'production' })

export const cadastroService = {
  cadastrosAll,
  createCadastro,
  login
}

function login (form) {
  const requestConfig = {
    method: 'POST'
  }

  return axios.post('https://nameless-fjord-67867.herokuapp.com/api/login', form, requestConfig)
}

function cadastrosAll () {
  const requestConfig = {
    method: 'GET'
  }
  return Vue.axios.get('api/cadastros', requestConfig)
}

function createCadastro (form) {
  const requestConfig = {
    method: 'GET'
  }
  return Vue.axios.post('api/cadastros', form, requestConfig)
}
