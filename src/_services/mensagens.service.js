import axios from 'axios'

export const mensagemService = {
  findMensagensEmpresa,
  sendMensagem
}

const url = 'https://nameless-fjord-67867.herokuapp.com/api'

function findMensagensEmpresa (nome) {
  const requestConfig = {
    method: 'GET'
  }

  return axios.get(`${url}/mensagens/empresa/${nome}`, requestConfig)
}

function sendMensagem (form) {
  const requestConfig = {
    method: 'GET'
  }

  return axios.post(`${url}/mensagens`, form, requestConfig)
}
