import React, { useState, useRef, useCallback, useEffect } from 'react';
import CForm from '../../../components/FormCrediCard';
import Card from '../../../components/Card';
import { FiArrowLeft } from 'react-icons/fi';
import { ButtonLoading } from '../../../components/ButtonLoading';
import { ICradiCard } from '../../../interfaces/api.interface';
import { Cartao } from '../../../services/cartao';
import { logout } from '../../../redux/user/actions';
import { connect } from 'react-redux';
import CrediCardForm from './CrediCardForm';
import StepWizard from 'react-step-wizard';
import { CrediCardList } from './CrediCardList';

import './style.scss'

const initialState = {
  cardNumber: '#### #### #### ####',
  cardHolder: 'FULL NAME',
  cardMonth: '',
  cardYear: '',
  cardCvv: '',
  isCardFlipped: false
};

const CrediCard = (props) => {
  const [crediCard, setCrediCard] = useState<ICradiCard[]>([]);
  const useCrediCard = new Cartao()
  useEffect(() => { searchCrediCard() }, [props.userToken])

  const searchCrediCard = async () => {
    const _CrediCard = await useCrediCard.findAll()
    if (_CrediCard) setCrediCard(_CrediCard)
    else logout()
  }

  const onSelectCardiCard = (id: number) => {
    props.nextStep()
    if (props.onSelectCardiCard) props.onSelectCardiCard(id)
  }

  const onSubmit = () => {
    searchCrediCard()
  }

  return (
    <StepWizard>
      <CrediCardList crediCard={crediCard} onSelect={onSelectCardiCard} />
      <CrediCardForm onSubmit={onSubmit} />
    </StepWizard>
  );
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  userToken: state.user.token
});

export default connect(
  mapStateToProps,
)(CrediCard);
