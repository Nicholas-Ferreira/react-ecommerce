import React from 'react';
import { ButtonLoading } from '../../../components/ButtonLoading';

function Confirm({ onSubmit, loading }) {
  return (
    <ButtonLoading label="Confirmar" loading={loading} onClick={onSubmit} />
  );
}

export default Confirm;