import React, { Component } from 'react';
import { connect } from 'react-redux';
import StepWizard from "react-step-wizard";
import Stepper from 'react-stepper-horizontal'
import { loadCart, removeProduct, changeProductQuantity } from '../../redux/cart/actions';
import { updateCart } from '../../redux/total/actions';
import { formatPrice } from '../../util';
import { IFloatCartActionProps, IFloatCartProps, IFloatCartState } from '../../components/FloatCart/interface';
import FloatCart from './FloatCart';
import Address from './Address';
import CrediCard from './CrediCard';
import Credential from './Credential';
import Confirm from './Confirm';

import './style.scss';
import { Pagamento } from '../../services/pagamento';
import { toast } from 'react-toastify';

function Nav({ currentStep }: any) {
  return <Stepper steps={[{ title: 'Login' }, { title: 'Endereço' }, { title: 'Cartão' }, { title: 'Confirmar' }]} activeStep={currentStep - 1} />
}
class Checkout extends Component<IFloatCartProps & IFloatCartActionProps> {
  state = { address: 0, card: 0, loading: false }

  proceedToCheckout = () => {
    const { totalPrice, productQuantity, currencyFormat, currencyId } = this.props.cartTotal;
    const { cartProducts } = this.props
    console.log(cartProducts)
  };

  onSelectAddress = (id) => {
    console.log('onSelectAddress', id)
    this.setState({ address: id })
  }

  onSubmit = async () => {
    const { cartProducts } = this.props
    const pagamento = new Pagamento()

    this.setState({ loading: true })
    const pedido = await pagamento.pagar({
      idCartao: this.state.card,
      idEndereco: this.state.address,
      parcelado: 1,
      itens: cartProducts.map(p => ({ produtoId: p.id, quantidade: p.quantity }))
    })
    this.setState({ loading: false })

    if (pedido == false) return
    toast.success('Pedido Realizado com Sucesso!')
  }

  render() {
    return (
      <div className={'checkout-page'}>
        <div className="step-container">
          <StepWizard nav={<Nav />}>
            <Credential />
            <Address onSelectAddress={this.onSelectAddress} />
            <CrediCard onSelectCardiCard={(id) => this.setState({ card: id })} />
            <Confirm onSubmit={this.onSubmit} loading={this.state.loading} />
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
