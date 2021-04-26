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