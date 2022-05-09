import axios from 'axios'
import { BASE_URL } from './constants'

export const storeInstance = axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: false,
  headers: { 'Access-Control-Allow-Origin': '*' },
})
