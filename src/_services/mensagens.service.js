import axios from 'axios'

export const mensagemService = {
  mensagensAll,
  findMensagens,
  sendMensagem
}

const url = 'https://nameless-fjord-67867.herokuapp.com/api'

function findMensagens () {
  const requestConfig = {
    method: 'GET'
  }

  return axios.get(`${url}/mensagens`, requestConfig)
}

function sendMensagem (form) {
  const requestConfig = {
    method: 'GET'
  }

  return axios.post(`${url}/mensagens`, form, requestConfig)
}
