import React from 'react';
import { Button, ButtonProps, Spinner } from 'react-bootstrap';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

export interface ButtonLoadingProps extends ButtonProps {
  label: string;
  loading: boolean;
  onlyLoader?: boolean
}

function ButtonLoading(props: ButtonLoadingProps) {
  const spinner = <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />

  const { label, loading, onlyLoader } = props
  return (
    <Button variant="primary" type="submit" block {...props} disabled={loading}>
      {loading && spinner}{(!onlyLoader && loading) && ` ${label}`}
      {!loading && label}
    </Button>
  );
}

declare type ButtonLoading = BsPrefixRefForwardingComponent<'button', ButtonLoadingProps>;
export { ButtonLoading };