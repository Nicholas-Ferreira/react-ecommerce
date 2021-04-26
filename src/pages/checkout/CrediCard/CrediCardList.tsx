import React, { useEffect, useState } from 'react';
import Card from '../../../components/Card';
import dayjs from 'dayjs';
import { ICradiCard } from '../../../interfaces/api.interface';
import { FiPlus } from 'react-icons/fi';

export function CrediCardList(props) {
  const [currentFocusedElm, setCurrentFocusedElm] = useState(null);
  return (
    <div className="cards-list">
      {props.crediCard.map((card: ICradiCard) => (
        <div onClick={() => props.onSelect(card.id)}>
          <Card
            cardNumber={`**** #### #### ${card.numero}`}
            cardHolder={card.titular}
            cardMonth={dayjs(card.data_vencimento).format('MM')}
            cardYear={dayjs(card.data_vencimento).format('YY')}
            cardCvv={"***"}
            isCardFlipped={false}
            currentFocusedElm={currentFocusedElm}
            onCardElementClick={() => { }}
            cardNumberRef={null}
            cardHolderRef={null}
            cardDateRef={null}
          />
        </div>
      ))}
      <div className="card-item append-card" onClick={() => props.nextStep()}>
        <p>Adicionar Novo Cartão</p>
        <FiPlus size={26} color={"#b3b3b3"} />
      </div>
    </div>
  )
}