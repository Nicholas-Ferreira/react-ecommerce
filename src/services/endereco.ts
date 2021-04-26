import { IErrorAPI } from './../interfaces/api.interface';
import { AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import { IAddress } from '../interfaces/api.interface'
import { ecommerce } from './api'

export class Endereco {
  private request: AxiosInstance
  constructor() {
    this.request = ecommerce()
  }

  async findAll() {
    const { status, data } = await this.request.get<IAddress[] & IErrorAPI>('/endereco')
    if (status !== 200) {
      console.error(data)
      if (typeof data.message == 'string') toast.error(data.message)
      else data.message.map(err => toast.error(err))
      return false
    }
    return data
  }

  findOne() {

  }

  async add(endereco) {
    const { status, data } = await this.request.post<IAddress & IErrorAPI>('/endereco', endereco)
    if (status !== 201) {
      console.error(data)
      if (typeof data.message == 'string') toast.error(data.message)
      else data.message.map(err => toast.error(err))
      return false
    }
    return data
  }
}
