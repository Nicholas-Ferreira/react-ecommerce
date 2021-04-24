import axios from "axios"
import { BASE_URL, BUCKET_URL } from './api'

export const getCatalog = async () => {
  const { status, data } = await axios.get(`${BASE_URL}/products`)
  if (status != 200) return console.error(data)
  const produtos = normalizeProduct(data)
  console.log(produtos)
  return produtos
}

export const normalizeProduct = (data) => {
  return data.map(produto => {
    return {
      "id": produto.id,
      "sku": `${BUCKET_URL}${produto.imagens[0].url}`,
      "imagens": produto.imagens.map(i => `${BUCKET_URL}${i.url}`),
      "title": produto.titulo,
      "description": produto.descricao,
      "availableSizes": produto.tamanhos.map(t => t.nome),
      "style": produto.style,
      "price": +produto.preco,
      "installments": produto.parcelado,
      "currencyId": "BRL",
      "currencyFormat": "R$",
      "isFreeShipping": produto.frete
    }
  })
}

/*
{
  "id": 1,
  "titulo": "BERMUDA ESPORTIVA EM MOLETOM CINZA",
  "descricao": "",
  "preco": "59.90",
  "parcelado": 1,
  "style": "",
  "frete": true,
  "criado_em": "2021-04-24T02:29:35.949Z",
  "atualizado_em": "2021-04-24T02:30:11.877Z",
  "deletado_em": null,
  "imagens": [
    {
      "id": 1,
      "url": "/produtos/12.jpg",
      "principal": true,
      "criado_em": "2021-04-23T03:00:00.000Z",
      "deletado_em": null
    }
  ],
  "categoria": {
    "id": 1,
    "nome": "Camisa"
  },
  "tamanhos": [
    {
      "id": 3,
      "nome": "M",
      "criado_em": "2021-04-24T02:40:00.000Z"
    },
    {
      "id": 4,
      "nome": "ML",
      "criado_em": "2021-04-24T02:40:00.000Z"
    }
  ],
  "loja": {
    "id": 1,
    "nome": "teste1",
    "logomarca": "",
    "cnpj": 64376,
    "email": "contato@teste1.com",
    "criado_em": "2021-03-07T22:02:04.393Z"
  }
},
*/