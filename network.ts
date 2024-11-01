import axios, { AxiosInstance } from 'axios'

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const customAxios: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

export default customAxios
