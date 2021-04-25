import React, { Component } from 'react';
import { connect } from 'react-redux';
import StepWizard from "react-step-wizard";
import Stepper from 'react-stepper-horizontal'
import { loadCart, removeProduct, changeProductQuantity } from '../../redux/cart/actions';
import { updateCart } from '../../redux/total/actions';
import { formatPrice } from '../../util';
import { IFloatCartActionProps, IFloatCartProps, IFloatCartState } from '../../components/FloatCart/interface';
import FloatCart from './FloatCart';
import Address from './Steps/Address';
import CrediCard from './Steps/CrediCard';
import Credential from './Steps/Credential';

import './style.scss';
import Success from './Steps/Success';

function Nav({ currentStep }: any) {
  return <Stepper steps={[{ title: 'Login' }, { title: 'Endereço' }, { title: 'Cartão' }, { title: 'Sucesso!' }]} activeStep={currentStep - 1} />
}
class Checkout extends Component<IFloatCartProps & IFloatCartActionProps> {
  proceedToCheckout = () => {
    const { totalPrice, productQuantity, currencyFormat, currencyId } = this.props.cartTotal;
    const { cartProducts } = this.props

    console.log(cartProducts)
    if (!productQuantity) {
      alert('Add some product in the cart!');
    } else {
      alert(`Checkout - Subtotal: ${currencyFormat} ${formatPrice(totalPrice, currencyId)}`);
    }
  };

  render() {
    return (
      <div className={'checkout-page'}>
        <div className="step-container">
          <StepWizard nav={<Nav />} initialStep={3}>
            <Credential />
            <Address />
            <CrediCard />
            <Success />
          </StepWizard>
        </div>
        <FloatCart />
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
)(Checkout);
