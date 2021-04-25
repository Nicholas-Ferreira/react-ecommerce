import { ProductCard } from '../../interfaces/product.interface';
import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

export const login = (email: string, senha: string) => ({
  type: LOGIN_USER,
  payload: { email, senha }
});

export const logout = (product: ProductCard) => ({
  type: LOGOUT_USER,
  payload: product
});