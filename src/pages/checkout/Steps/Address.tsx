import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap'


function Address(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);

    props.nextStep()
  }
  console.log(errors);

  return (
    <div className='checkout-form'>
      <aside className='form'>
        <form onSubmit={handleSubmit(onSubmit)}>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Rua</Form.Label>
            <Form.Control placeholder="Ex: Rua ..." />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Complemento</Form.Label>
            <Form.Control placeholder="Ex: Apto 123" />
          </Form.Group>

            <Form.Group controlId="formGridCity">
              <Form.Label>Cidade</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group controlId="formGridState">
              <Form.Label>Estado</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>São Paulo</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formGridZip">
              <Form.Label>CEP</Form.Label>
              <Form.Control />
            </Form.Group>

          <Button variant="primary" type="submit" block>
            Avançar
        </Button>
        </form>
      </aside>
    </div>
  );
}
export default Address;