import axios from 'axios'

export const formService = {
  sendMessages,
  findMensagemBusiness
}

const url = 'https://nameless-fjord-67867.herokuapp.com/api'

function sendMessages (form) {
  const requestConfig = {
    method: 'GET'
  }

  return axios.post(`${url}/formularios/recebidos`, form, requestConfig)
}

function findMensagemBusiness (business) {
  const requestConfig = {
    method: 'GET'
  }

  return axios.get(`${url}/formularios/recebidos/empresas/${business}`, requestConfig)
}
