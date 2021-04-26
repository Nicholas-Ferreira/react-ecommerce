import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { IAddress } from '../../interfaces/api.interface';
import { mCEP } from '../../utils/mask';
import { capitalize } from '../../utils/string';
import './style.scss'

export interface IAddressCardProps {
  address: IAddress
  onClick: (id: number) => void
}

function AddressCard({ address, onClick }: IAddressCardProps) {
  return (
    <div className={'address-card'} onClick={() => onClick(address.id)}>
      <p>
        {address.logradouro}, {address.numero} <br />
        {mCEP(address.cep)} - {address.cidade}, {address.estado}
      </p>
      <FiChevronRight size={26} color={"#b3b3b3"}/>
    </div>
  );
}

export default AddressCard;