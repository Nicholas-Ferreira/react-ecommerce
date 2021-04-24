import axios from "axios"
import { ApiMystyleProduct, Product } from "../interfaces/product.interface"
import { BASE_URL, BUCKET_URL } from './api'

export const getCatalog = async (): Promise<Array<Product>> => {
  const { status, data } = await axios.get<Array<ApiMystyleProduct>>(`${BASE_URL}/produto`)
  if (status != 200) {
    console.error(data)
    return []
  }
  const produtos = normalizeProduct(data)
  return produtos
}

export const normalizeProduct = (data: Array<ApiMystyleProduct>): Array<Product> => {
  return data.map(produto => {
    return {
      id: produto.id,
      sku: `${BUCKET_URL}${produto.imagens[0].url}`,
      imagens: produto.imagens.map(i => `${BUCKET_URL}${i.url}`),
      title: produto.titulo,
      description: produto.descricao,
      availableSizes: produto.tamanhos.map(t => t.nome),
      style: produto.style,
      price: +produto.preco,
      installments: +produto.parcelado,
      currencyId: "BRL",
      currencyFormat: "R$",
      isFreeShipping: produto.frete
    }
  })
}