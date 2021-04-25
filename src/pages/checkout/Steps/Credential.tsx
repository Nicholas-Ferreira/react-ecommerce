import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap'

function Credential(props) {
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

          <Form.Group>
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" {...register("Senha", { required: true, maxLength: 100 })} />
          </Form.Group>

          <Button variant="primary" type="submit" block>
            Avançar
        </Button>

        </form>
      </aside>
    </div>
  );
}

export default Credential;