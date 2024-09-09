import { HttpServices } from '@/services/HttpServices'

export const getProductsByPage = async (page: number) => {
  const { products } = await HttpServices.get<GetProductsResponse>({
    url: 'products',
    params: {
      page,
    },
  })

  return products
}
