import { IErrorAPI } from './../interfaces/api.interface';
import { AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import { ICradiCard } from '../interfaces/api.interface'
import { ecommerce } from './api'

export class Cartao {
  private request: AxiosInstance
  constructor() {
    this.request = ecommerce()
  }

  async findAll() {
    const { status, data } = await this.request.get<ICradiCard[] & IErrorAPI>('/cartao')
    if (status !== 200) {
      console.error(data)
      if (typeof data.message == 'string') toast.error(data.message)
      else data.message.map(err => toast.error(err))
      return false
    }
    return data
  }

  async add(cartao) {
    const { status, data } = await this.request.post<ICradiCard & IErrorAPI>('/cartao', cartao)
    if (status !== 201) {
      console.error(data)
      if (typeof data.message == 'string') toast.error(data.message)
      else data.message.map(err => toast.error(err))
      return false
    }
    return true
  }
}
