import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

export interface IUserState {
  email: string;
  token: string;
}

const initialState = {
  email: '',
  token: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        ...action.payload
      };
    case LOGOUT_USER:
      return {
        ...state,
        token: ''
      };
    default:
      return state;
  }
}
