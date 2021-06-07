import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux';
import { login, logout } from '../../../redux/user/actions';
import { ButtonLoading } from '../../../components/ButtonLoading';
import ReCAPTCHA from 'react-google-recaptcha';

function Credential(props) {
  const [loading, setLoading] = useState(true)
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  useEffect(() => { setValue('email', props.userEmail) }, [props.userEmail])
  useEffect(() => {
    if (props.userToken && props.currentStep == 1) props.goToStep(2)
    else setLoading(false)
  }, [props.userToken])

  const onSubmitLogin = async ({ email, senha }) => {
    if (loading || !email || !senha || !recaptchaRef.current) return null
    const recaptchaValue = recaptchaRef.current.getValue();
    console.log(recaptchaValue)

    setLoading(true)
    const status = await props.login(email, senha, recaptchaValue)
    setLoading(false)
    if (!status) return null
    return null
  }

  const onChange = (value: any) => {
    console.log("Captcha value:", value);
  }

  return (
    <div className='checkout-form'>
      <aside className='form'>
        <form onSubmit={handleSubmit(onSubmitLogin)}>

          <Form.Group>
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" {...register("senha", { required: true, minLength: 8 })} />
          </Form.Group>

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LfbV5saAAAAAEHimZ9WKlklVPoq9pK_lxyl34OF"
            onChange={onChange}
          />

          <ButtonLoading label={'Avançar'} loading={loading} onlyLoader />
        </form>
      </aside>
    </div >
  );
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  userToken: state.user.token
});

export default connect(
  mapStateToProps,
  { login, logout }
)(Credential);
