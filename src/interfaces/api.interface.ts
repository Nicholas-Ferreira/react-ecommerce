export interface IErrorAPI {
  statusCode?: string;
  message: string[] | string
  error?: string
}

export interface IAddress {
  id: number;
  logradouro: string;
  numero: string;
  cep: string;
  complemento: string;
  bairro: string;
  estado: string;
  cidade: string;
}

export interface ICradiCard {
  id?: number;
  titular: string,
  numero: string,
  data_vencimento: Date,
  criado_em: Date,
  cancelado_em: Date | null
}

export interface IOrder {
  idCartao: number,
  idEndereco: number,
  parcelado: number,
  itens: Array<{
    produtoId: number,
    quantidade: number
  }>
}