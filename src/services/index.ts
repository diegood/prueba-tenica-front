import { Auth } from '@/models/Auth'
import axios from 'axios'
import Authentication from './Authentication'
import User from './User'

export const api = axios.create({
  baseURL: 'http://51.38.51.187:5050/api/v1/',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const credentials: Auth = JSON.parse(localStorage.credentials || '{}')
  const authHeader = `Bearer ${credentials.accessToken}`
  config.headers = { Authorization: authHeader }
  return config
})

api.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error && error.response && error.response.status === 401) {
      localStorage.removeItem('credentials')
    }
    return Promise.reject(error)
  },
)

export default {
  Authentication,
  User,
}
