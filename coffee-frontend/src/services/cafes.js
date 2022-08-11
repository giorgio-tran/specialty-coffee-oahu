import axios from 'axios'
const baseUrl = 'http://localhost:3001/cafes'

const getAll = () => {
    return axios.get(baseUrl)
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

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAll: getAll,
    create: create,
    update: update,
    remove: remove
}