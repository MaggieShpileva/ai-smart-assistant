import axios, { AxiosInstance } from 'axios'

export const API_URL = process.env.NEXT_PUBLIC_API_URL
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const customAxios: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

export default customAxios
