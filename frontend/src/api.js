// src/api.js
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Cambia si tu backend usa otro puerto o ruta
})

export default api
