import axios from 'axios'

export const tableService = {
  searchBusiness
}
const url = 'https://nameless-fjord-67867.herokuapp.com/api'

function searchBusiness (query) {
  const requestConfig = {
    method: 'GET'
  }

  return axios.get(`${url}/table/search?word=${query}`, requestConfig)
}
