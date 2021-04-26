import axios from 'axios';
import history from '../history';
import { getGlobalState } from '../redux/store';
export const BASE_URL = 'http://localhost:3001'
export const BUCKET_URL = 'https://mystyle-ecommerce.s3-sa-east-1.amazonaws.com'

export const ecommerce = () => {
  const token = getGlobalState('user.token')
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`
    },
    validateStatus: (status) => {
      if (status == 401 && token) {
        const state = getGlobalState()
        if (state) {
          state.user.token = ''
          window.localStorage.setItem('store', JSON.stringify(state));
          history.replace('/')
        }
        return false
      }
      return true
    }
  })
}