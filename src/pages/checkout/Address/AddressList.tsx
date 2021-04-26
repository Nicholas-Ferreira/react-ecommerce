import React, { useEffect, useState } from 'react';
import { Endereco } from '../../../services/endereco';
import { IAddress } from '../../../interfaces/api.interface';
import AddressCard from '../../../components/AddressCard';
import { FiPlus } from 'react-icons/fi';

export function AddressList(props) {
  return (
    <div className="address-list">
      {props.address.map((_address) => <AddressCard address={_address} onClick={props.onSelect} />)}
      <div className={'address-card'} onClick={() => props.nextStep()}>
        <p>Adicionar novo endereço</p>
        <FiPlus size={26} color={"#b3b3b3"} />
      </div>
    </div>
  )
}