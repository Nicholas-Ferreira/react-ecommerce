import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import StepWizard from 'react-step-wizard';
import { IAddress } from '../../../interfaces/api.interface';
import { Endereco } from '../../../services/endereco';
import AddressForm from './AddressForm';
import { AddressList } from './AddressList'

function Address(props) {
  const [address, setAddress] = useState<IAddress[]>([])
  const useAddress = new Endereco()
  useEffect(() => { searchAddress() }, [props.userToken])

  const searchAddress = async () => {
    const _address = await useAddress.findAll()
    if (_address) setAddress(_address)
  }

  const onSelectAddress = (id: number) => {
    console.log(id)
    props.nextStep()
  }

  const onSubmit = () => {
    searchAddress()
  }


  return (
    <StepWizard>
      <AddressList address={address} onSelect={onSelectAddress} />
      <AddressForm onSubmit={onSubmit} />
    </StepWizard>
  );
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  userToken: state.user.token
});

export default connect(
  mapStateToProps,
)(Address);
