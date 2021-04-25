import React, { Component } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { loadCart, removeProduct, changeProductQuantity } from '../../../redux/cart/actions';
import { updateCart } from '../../../redux/total/actions';
import CartProduct from '../CartProduct';
import { formatPrice } from '../../../util';
import { ProductCard } from '../../../interfaces/product.interface';
import { IFloatCartActionProps, IFloatCartProps, IFloatCartState } from '../../../components/FloatCart/interface';

import './style.scss'

class FloatCart extends Component<IFloatCartProps & IFloatCartActionProps> {
  componentWillReceiveProps(nextProps) {
    if (nextProps.productToRemove !== this.props.productToRemove) {
      this.removeProduct(nextProps.productToRemove);
    }

    if (nextProps.productToChange !== this.props.productToChange) {
      this.changeProductQuantity(nextProps.productToChange);
    }
  }

  removeProduct = product => {
    const { cartProducts, updateCart } = this.props;
    const index = cartProducts.findIndex(p => p.id === product.id);
    if (index >= 0) {
      cartProducts.splice(index, 1);
      updateCart(cartProducts);
    }
  };

  proceedToCheckout = () => {
    const { totalPrice, productQuantity, currencyFormat, currencyId } = this.props.cartTotal;
    const { cartProducts } = this.props

    console.log(cartProducts)
    if (!productQuantity) {
      alert('Add some product in the cart!');
    } else {
      alert(
        `Checkout - Subtotal: ${currencyFormat} ${formatPrice(
          totalPrice,
          currencyId
        )}`
      );
    }
  };

  changeProductQuantity = (changedProduct: ProductCard) => {
    const { cartProducts, updateCart } = this.props;
    const product = cartProducts.find(p => p.id === changedProduct.id);
    if (!product) return

    product.quantity = changedProduct.quantity;
    if (product.quantity <= 0) this.removeProduct(product);
    updateCart(cartProducts);
  }

  render() {
    const { cartTotal, cartProducts, removeProduct, changeProductQuantity } = this.props;

    const products = cartProducts.map(p => {
      return (
        <CartProduct product={p} removeProduct={removeProduct} changeProductQuantity={changeProductQuantity} key={p.id} />
      );
    });
    
    return (
      <div className={'float-cart-checkout float-cart-checkout--open '}>
        <div className="float-cart-checkout__content">
          <div className="float-cart-checkout__header">
            <span className="bag">
              <span className="bag__quantity">{cartTotal.productQuantity}</span>
            </span>
            <span className="header-title">Cart</span>
          </div>

          <div className="float-cart-checkout__shelf-container">
            {products}
            {!products.length && (
              <p className="shelf-empty">
                Add some products in the cart <br />
                :)
              </p>
            )}
          </div>

          <div className="float-cart-checkout__footer">
            <div className="sub">SUBTOTAL</div>
            <div className="sub-price">
              <p className="sub-price__val">
                {`${cartTotal.currencyFormat} ${formatPrice(
                  cartTotal.totalPrice,
                  cartTotal.currencyId
                )}`}
              </p>
              <small className="sub-price__installment">
                {!!cartTotal.installments && (
                  <span>
                    {`OR UP TO ${cartTotal.installments} x ${cartTotal.currencyFormat
                      } ${formatPrice(
                        cartTotal.totalPrice / cartTotal.installments,
                        cartTotal.currencyId
                      )}`}
                  </span>
                )}
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IFloatCartState): IFloatCartProps => ({
  cartProducts: state.cart.products,
  newProduct: state.cart.productToAdd,
  productToRemove: state.cart.productToRemove,
  productToChange: state.cart.productToChange,
  cartTotal: state.total.data
});

export default connect(
  mapStateToProps,
  { loadCart, updateCart, removeProduct, changeProductQuantity }
)(FloatCart);
