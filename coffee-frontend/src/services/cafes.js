import axios from 'axios'
const baseUrl = 'http://localhost:3001/cafes'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newCafe => {
  const request = axios.post(baseUrl, newCafe)
  return request.then(response => response.data)
}

const update = (id, newCafe) => {
  const request = axios.put(`${baseUrl}/${id}`, newCafe)
  return request.then(response => response.data)
}

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

export default {
  getAll: getAll,
  create: create,
  update: update,
  remove: remove
}