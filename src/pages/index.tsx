import { Fragment } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

import { useGetCategories } from '@/hooks/products/useGetCategories'
import { useGetProducts } from '@/hooks/products/useGetProducts'

const Home: NextPage = () => {
  const { categories, isFetchingCategories } = useGetCategories()
  const {
    products,
    isFetchingProducts,
    page,
    category,
    searchText,
    setSearchText,
    handleSetCategory,
    handleSetPage,
    handleGoToPreviousPage,
    handleGoToNextPage,
  } = useGetProducts()

  return (
    <Fragment>
      <Head>
        <title>Produtos - MySide</title>
      </Head>
      <div>
        <div>
          <h1>Products</h1>
          {JSON.stringify(products ?? {})}
        </div>
        <div>
          <h1>Categories</h1>
          {JSON.stringify(categories ?? {})}
        </div>
      </div>
    </Fragment>
  )
}

export default Home
