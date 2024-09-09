import { useCallback, useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { QueryKey } from '@/enums/QueryKey'

import { getProductsByCategory } from '@/query/products/getProductsByCategory'
import { getProductsByPage } from '@/query/products/getProductsByPage'

import { filterData } from '@/utils/filterData'

// TODO: ask the backend team to refactor the API to accept category and page as query parameters in a single request

export const useGetProducts = () => {
  const [searchText, setSearchText] = useState('')
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState<string>()

  const { data: products, isFetching: isFetchingProducts } = useQuery({
    queryKey: [QueryKey.GET_PRODUCTS, { category, page }],
    queryFn: async () => {
      try {
        if (category) {
          return await getProductsByCategory(category)
        } else {
          return await getProductsByPage(page)
        }
      } catch (error) {
        toast.error(error as string)
        throw error
      }
    },
  })

  const filteredProducts = useMemo(
    () => filterData(searchText, products),
    [products, searchText],
  )

  const handleSetCategory = useCallback((newCategory: string) => {
    setCategory(newCategory)
    setPage(1)
  }, [])

  const handleSetPage = useCallback((newPage: number) => {
    if (newPage > 1) {
      setCategory(undefined)
    }

    setPage(newPage)
  }, [])

  const handleGoToPreviousPage = useCallback(() => {
    handleSetPage(page - 1)
  }, [handleSetPage, page])

  const handleGoToNextPage = useCallback(() => {
    handleSetPage(page + 1)
  }, [handleSetPage, page])

  return {
    products: filteredProducts,
    isFetchingProducts,
    page,
    category,
    searchText,
    setSearchText,
    handleSetCategory,
    handleSetPage,
    handleGoToPreviousPage,
    handleGoToNextPage,
  }
}
