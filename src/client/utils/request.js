import axios from 'axios'

export const clientInstance = axios.create({
  baseURL: '/',
})

export const serveInstance = axios.create({
  baseURL: 'http://localhost:3000'
})