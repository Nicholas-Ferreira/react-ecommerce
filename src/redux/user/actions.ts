import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../services/api';
import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

export const login = (email: string, senha: string) => async dispatch => {
  const { status, data } = await axios.post(`${BASE_URL}/auth/signin`, { email, senha }, { validateStatus: () => true })
  if (status !== 200) {
    console.error(data)
    if (typeof data.message == 'string') toast.error(data.message)
    else data.message.map(err => toast.error(err))
    return false
  }

  dispatch({
    type: LOGIN_USER,
    payload: { email, token: data.token }
  });
  return true
};

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT_USER,
    payload: {}
  });
};