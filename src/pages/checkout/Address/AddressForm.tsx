import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Button, Col } from 'react-bootstrap'
import InputMask from 'react-input-mask';
import axios from 'axios';
import { IViaCEPResponse } from '../../../interfaces/viacep.interface';
import { FiArrowLeft } from 'react-icons/fi';
import { Endereco } from '../../../services/endereco';
import { ButtonLoading } from '../../../components/ButtonLoading';

export function AddressForm(props) {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors }, control, watch, setValue } = useForm();

  const onSubmit = async (data) => {
    const endereco = new Endereco()
    setLoading(true)
    const _endereco = await endereco.add({ ...data, cep: data.cep.replace('-', '') })
    setLoading(false)
    if (!_endereco) return

    props.previousStep()
    return props.onSubmit(_endereco, props)
  }

  useEffect(() => {
    (async () => {
      try {
        const cepMask: string = watch('cep')
        const cep = cepMask.replace(/[^\d]/g, '')
        if (cep.length != 8) return
        const { status, data } = await axios.get<IViaCEPResponse>(`https://viacep.com.br/ws/${cep}/json/`)
        if (status != 200) return console.error(status, data)
        console.log(data)
        setValue('logradouro', data.logradouro)
        setValue('bairro', data.bairro)
        setValue('cidade', data.localidade)
        setValue('estado', data.uf)
      } catch (error) {
        return false
      }
    })()
  }, [watch('cep')])

  return (
    <div className='checkout-form'>
      <aside className='form'>
        <span className={'back'} onClick={props.previousStep}><FiArrowLeft /> Voltar</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formGridZip" >
            <Form.Label>CEP</Form.Label>
            <Controller
              name="cep"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Form.Control as={InputMask} placeholder="_____-___" mask="99999-999" {...field} />}
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridAddress1" xs={8}>
              <Form.Label>Rua</Form.Label>
              <Form.Control placeholder="" {...register("logradouro", { required: true })} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridAddress2" >
              <Form.Label>Número</Form.Label>
              <Form.Control {...register("numero", { required: true })} />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress3">
            <Form.Label>Bairro</Form.Label>
            <Form.Control placeholder="" {...register("bairro", { required: true })} />
          </Form.Group>

          <Form.Group controlId="formGridAddress4">
            <Form.Label>Complemento</Form.Label>
            <Form.Control placeholder="" {...register("complemento", { required: false })} />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Cidade</Form.Label>
              <Form.Control  {...register("cidade", { required: true })} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Estado</Form.Label>
              <Form.Control as="select" defaultValue="Selecione um Estado..." {...register("estado", { required: true })}>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
                <option value="EX">Estrangeiro</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <ButtonLoading label="Salvar" loading={loading} />
        </form>
      </aside>
    </div>
  );
}

export default AddressForm;