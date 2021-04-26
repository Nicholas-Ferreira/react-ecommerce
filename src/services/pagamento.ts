import { IErrorAPI, IOrder } from './../interfaces/api.interface';
import { AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import { ecommerce } from './api'

export class Pagamento {
  private request: AxiosInstance
  constructor() {
    this.request = ecommerce()
  }

  async pagar(pedido: IOrder) {
    const { status, data } = await this.request.post<IOrder & IErrorAPI>('/pedido', pedido)
    if (status !== 201) {
      console.error(data)
      if (typeof data.message == 'string') toast.error(data.message)
      else data.message.map(err => toast.error(err))
      return false
    }
    return data
  }
}
