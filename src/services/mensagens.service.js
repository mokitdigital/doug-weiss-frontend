import axios from 'axios'

export const mensagemService = {
  findMensagensEmpresa,
  sendMensagemEmpresa,
  deleteMensagemEmpresa
}

const url = 'https://nameless-fjord-67867.herokuapp.com/api'

function findMensagensEmpresa (nome) {
  const requestConfig = {
    method: 'GET'
  }

  return axios.get(`${url}/mensagens/empresas/${nome}`, requestConfig)
}

function sendMensagemEmpresa (nome, form) {
  const requestConfig = {
    method: 'GET'
  }

  return axios.post(`${url}/mensagens/envios/${nome}`, form, requestConfig)
}

function deleteMensagemEmpresa (nome) {
  const requestConfig = {
    method: 'GET'
  }

  return axios.post(`${url}/mensagens/empresas/${nome}`, requestConfig)
}
