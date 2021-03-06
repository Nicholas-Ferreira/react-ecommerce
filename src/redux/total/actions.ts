import { ProductCard } from './../../interfaces/product.interface';
import { UPDATE_CART } from './actionTypes';

export const updateCart = (cartProducts: Array<ProductCard>) => dispatch => {
  let productQuantity = cartProducts.reduce((sum, p) => {
    sum += p.quantity;
    return sum;
  }, 0);

  let totalPrice = cartProducts.reduce((sum, p) => {
    sum += p.price * p.quantity;
    return sum;
  }, 0);

  let installments = cartProducts.reduce((greater, p) => {
    greater = p.installments > greater ? p.installments : greater;
    return greater;
  }, 0);

  let cartTotal = {
    productQuantity,
    installments,
    totalPrice,
    currencyId: 'BRL',
    currencyFormat: 'R$'
  };

  dispatch({
    type: UPDATE_CART,
    payload: cartTotal
  });
};
