import axios from 'axios'
const baseUrl = 'http://localhost:3001/cafes'

const getAll = () => {
    return axios.get(baseUrl)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAll: getAll,
}