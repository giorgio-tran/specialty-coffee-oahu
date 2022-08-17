import axios from 'axios'
const baseUrl = 'http://localhost:3001/coffeeShops'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newCoffeeShop => {
  const request = axios.post(baseUrl, newCoffeeShop)
  return request.then(response => response.data)
}

const update = (id, newCoffeeShop) => {
  const request = axios.put(`${baseUrl}/${id}`, newCoffeeShop)
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