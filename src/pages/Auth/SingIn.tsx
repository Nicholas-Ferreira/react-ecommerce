import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";

import { FiLogIn } from "react-icons/fi";
import { Form, Button } from "react-bootstrap"
import './style.scss';

import axios from 'axios'

function SingIn() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useHistory();


  const handleSubmit = async () => {
    setLoading(true)

    try {
      const res = await axios.post(`http://localhost:3000/auth/signin`, {
        email: email,
        senha: senha
      })

      if (res.status === 200) {
        history.push("app");
      }
    }

    catch (err) {
      console.error(err)
    }
  }

  return (
    <div id='page'>
      <aside>
        <div className='content-wrapper'>
          {/* <img src={logoImg} alt="Logo Happy" />*/}
          <main>
            <h1>MyStyle</h1>
          </main>

          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Control type="email" placeholder="Endereço de email" />
            </Form.Group>

            <Form.Group controlId="formGroupPassword">
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>

            <Button variant="primary" size="sm" block>
              Entrar
            </Button>

            <Link to='SingUp' className='register-app'>
              <FiLogIn color='#4dacb1' className="icon" />
              Não tenho cadastro
            </Link>
            
          </Form>

        </div>
      </aside>
    </div>
  )
}

export default SingIn