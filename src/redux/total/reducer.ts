import { UPDATE_CART } from './actionTypes';

export interface TotalState {
  data: {
    productQuantity: number,
    installments: number,
    totalPrice: number,
    currencyId: 'BRL' | string,
    currencyFormat: 'R$' | '$' | string
  }
}

const initialState = {
  data: {
    productQuantity: 0,
    installments: 0,
    totalPrice: 0,
    currencyId: 'BRL',
    currencyFormat: 'R$'
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
