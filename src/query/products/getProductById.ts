import { HttpServices } from '@/services/HttpServices'

export const getProductById = async (id: number) => {
  const { product } = await HttpServices.get<GetProductByIdResponse>({
    url: 'products/' + id,
  })

  return product
}
