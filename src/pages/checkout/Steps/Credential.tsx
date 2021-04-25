import React from 'react';
import { useForm } from 'react-hook-form';

function Credential(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);

    props.nextStep()
  }
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
      <input type="text" placeholder="Senha" {...register("Senha", { required: true, maxLength: 100 })} />

      <input type="submit" />
    </form>
  );
}

export default Credential;