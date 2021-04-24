export interface ApiMystyleProduct {
  id: number;
  titulo: string;
  descricao: string;
  preco: number;
  parcelado: number;
  style: string;
  frete: boolean;
  criado_em: Date;
  atualizado_em: Date;
  deletado_em: Date | null;
  categoria: {
    id: number;
    nome: string
  };
  loja: {
    id: number;
    nome: string;
    logomarca: string;
    cnpj: number;
    email: string;
    criado_em: Date
  }
  imagens: Array<{
    id: number;
    url: string;
    principal: boolean;
    criado_em: Date;
    deletado_em: Date | null
  }>;
  tamanhos: Array<{
    id: number;
    nome: string;
    criado_em: Date
  }>;
}

export interface Product {
  id: number,
  sku: string,
  imagens: string[],
  title: string,
  description: string,
  availableSizes: string[],
  style: string,
  price: number,
  installments: number,
  currencyId: "BRL" | string,
  currencyFormat: "R$" | "$" | string,
  isFreeShipping: boolean
}

export interface ProductCard extends Product {
  quantity: number
}