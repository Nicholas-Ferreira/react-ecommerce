import axios from 'axios';
import { getGlobalState } from '../redux/store';
export const BASE_URL = 'http://localhost:3001'
export const BUCKET_URL = 'https://mystyle-ecommerce.s3-sa-east-1.amazonaws.com'

export const ecommerce = () => {
  const token = getGlobalState('user.token')
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}