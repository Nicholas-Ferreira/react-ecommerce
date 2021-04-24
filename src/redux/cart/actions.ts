import { ProductCard } from '../../interfaces/product.interface';
import { LOAD_CART, ADD_PRODUCT, REMOVE_PRODUCT, CHANGE_PRODUCT_QUANTITY } from './actionTypes';

export const loadCart = (products: ProductCard) => ({
  type: LOAD_CART,
  payload: products
});

export const addProduct = (product: ProductCard) => ({
  type: ADD_PRODUCT,
  payload: product
});

export const removeProduct = (product: ProductCard) => ({
  type: REMOVE_PRODUCT,
  payload: product
});

export const changeProductQuantity = (product: ProductCard) => ({
  type: CHANGE_PRODUCT_QUANTITY,
  payload: product
});