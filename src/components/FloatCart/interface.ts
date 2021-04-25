import { ProductCard } from "../../interfaces/product.interface";
import { ICartState } from "../../redux/cart/reducer";
import { ITotalState } from "../../redux/total/reducer";

export interface IFloatCartActionProps {
  loadCart: Function;
  updateCart: Function;
  removeProduct: Function;
  changeProductQuantity: Function;
}

export interface IFloatCartProps {
  cartProducts: Array<ProductCard>;
  newProduct: ProductCard;
  productToRemove: ProductCard;
  productToChange: ProductCard;
  cartTotal: {
    productQuantity: number,
    installments: number,
    totalPrice: number,
    currencyId: 'BRL' | string,
    currencyFormat: 'R$' | '$' | string
  }
}

export interface IFloatCartState { 
  cart: ICartState, 
  total: ITotalState 
}