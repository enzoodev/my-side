import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { QueryKey } from '@/enums/QueryKey'

import { getProductById } from '@/query/products/getProductById'

export const useGetProduct = (productId: number) => {
  const { data: product, isFetching: isFetchingProduct } = useQuery({
    enabled: !!productId,
    queryKey: [QueryKey.GET_PRODUCT_BY_ID, { productId }],
    queryFn: async () => {
      try {
        return await getProductById(productId)
      } catch (error) {
        toast.error(error as string)
        throw error
      }
    },
  })

  return {
    product,
    isFetchingProduct,
  }
}
