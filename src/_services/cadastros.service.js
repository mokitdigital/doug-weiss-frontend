import Vue from 'vue'

export const cadastroService = {
  cadastrosAll,
  createCadastro,
  login
}

function login (form) {
  const requestConfig = {
    method: 'POST'
  }

  return Vue.axios.post('/api/login', form, requestConfig)
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
