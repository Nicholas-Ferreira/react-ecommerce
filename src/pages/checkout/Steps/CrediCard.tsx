import React, { useState, useRef, useCallback } from 'react';
import CForm from '../../../components/FormCrediCard';
import Card from '../../../components/Card';
import { FiArrowLeft } from 'react-icons/fi';
import { ButtonLoading } from '../../../components/ButtonLoading';

const initialState = {
  cardNumber: '#### #### #### ####',
  cardHolder: 'FULL NAME',
  cardMonth: '',
  cardYear: '',
  cardCvv: '',
  isCardFlipped: false
};

const CrediCard = (props) => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(initialState);
  const [currentFocusedElm, setCurrentFocusedElm] = useState(null);

  const updateStateValues = useCallback(
    (keyName, value) => {
      setState({
        ...state,
        [keyName]: value || initialState[keyName]
      });
    },
    [state]
  );

  // References for the Form Inputs used to focus corresponding inputs.
  let formFieldsRefObj = {
    cardNumber: useRef(),
    cardHolder: useRef(),
    cardDate: useRef(),
    cardCvv: useRef()
  };

  let focusFormFieldByKey = useCallback((key) => {
    formFieldsRefObj[key].current.focus();
  }, []);

  // This are the references for the Card DIV elements.
  let cardElementsRef = {
    cardNumber: useRef(),
    cardHolder: useRef(),
    cardDate: useRef()
  };

  let onCardFormInputFocus = (_event, inputName) => {
    const refByName = cardElementsRef[inputName];
    setCurrentFocusedElm(refByName);
  };

  let onCardInputBlur = useCallback(() => {
    setCurrentFocusedElm(null);
  }, []);

  return (
    <div className="wrapper">
      <span className={'back'} onClick={props.previousStep}><FiArrowLeft /> Voltar</span>
      <CForm
        cardMonth={state.cardMonth}
        cardYear={state.cardYear}
        onUpdateState={updateStateValues}
        cardNumberRef={formFieldsRefObj.cardNumber}
        cardHolderRef={formFieldsRefObj.cardHolder}
        cardDateRef={formFieldsRefObj.cardDate}
        cardCvv={formFieldsRefObj.cardCvv}
        onCardInputFocus={onCardFormInputFocus}
        onCardInputBlur={onCardInputBlur}
        loading={loading}
        onSubmit={() => { }}
      >
        <Card
          cardNumber={state.cardNumber}
          cardHolder={state.cardHolder}
          cardMonth={state.cardMonth}
          cardYear={state.cardYear}
          cardCvv={state.cardCvv}
          isCardFlipped={state.isCardFlipped}
          currentFocusedElm={currentFocusedElm}
          onCardElementClick={focusFormFieldByKey}
          cardNumberRef={cardElementsRef.cardNumber}
          cardHolderRef={cardElementsRef.cardHolder}
          cardDateRef={cardElementsRef.cardDate}
        ></Card>
      </CForm>
    </div>
  );
};

export default CrediCard;