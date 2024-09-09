import { HttpServices } from '@/services/HttpServices'

export const getProductsByCategory = async (category: string) => {
  const { products } = await HttpServices.get<GetProductsResponse>({
    url: 'products/category',
    params: {
      type: category,
    },
  })

  return products
}
