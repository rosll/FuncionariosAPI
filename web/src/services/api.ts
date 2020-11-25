import axios from 'axios'

const api = axios.create({
  baseURL: 'https://localhost:3737'
})

export default api