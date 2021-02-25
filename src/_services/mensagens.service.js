import Vue from 'vue'

export const mensagemService = {
  mensagensAll,
  findMensagens,
  sendMensagem
}

function mensagensAll () {
  const requestConfig = {
    method: 'GET'
  }

  return Vue.axios.get('/api/mensagens', requestConfig)
}

function findMensagens () {
  const requestConfig = {
    method: 'GET'
  }

  return Vue.axios.get('/api/mensagens', requestConfig)
}

function sendMensagem (form) {
  const requestConfig = {
    method: 'GET'
  }

  return Vue.axios.post('/api/mensagens', form, requestConfig)
}
