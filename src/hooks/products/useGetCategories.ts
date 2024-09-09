import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { QueryKey } from '@/enums/QueryKey'

import { getAllCategories } from '@/query/products/getAllCategories'

export const useGetCategories = () => {
  const { data: categories, isFetching: isFetchingCategories } = useQuery({
    queryKey: [QueryKey.GET_ALL_CATEGORIES],
    queryFn: async () => {
      try {
        return await getAllCategories()
      } catch (error) {
        toast.error(error as string)
        throw error
      }
    },
  })

  return {
    categories,
    isFetchingCategories,
  }
}
