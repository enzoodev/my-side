import { Fragment, useCallback, useMemo } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { useCartProducts } from '@/store/cart'

import { useGetCategories } from '@/hooks/products/useGetCategories'
import { useGetProducts } from '@/hooks/products/useGetProducts'

import { Routes } from '@/enums/Routes'

import { Header } from '@/components/elements/Header'
import { ProductItem } from '@/components/modules/ProductItem'
import { ProductSkeletonItem } from '@/components/modules/ProductSkeletonItem'

import { generateId } from '@/utils/generateId'

import * as S from '@/styles/pages'

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
  const { addProductToCart } = useCartProducts()
  const router = useRouter()

  const handleAddProductToCart = useCallback(
    (item: TProduct) => {
      addProductToCart(item)
      router.push(Routes.CART)
    },
    [addProductToCart, router],
  )

  const productItems = useMemo(() => {
    if (isFetchingProducts) {
      return Array.from({ length: 30 }, () => (
        <ProductSkeletonItem key={generateId()} />
      ))
    }

    if (products.length === 0) {
      return <p>Nenhum produto encontrado.</p>
    }

    return products.map((product) => (
      <ProductItem
        key={product.id}
        item={product}
        onAddProductToCart={() => handleAddProductToCart(product)}
      />
    ))
  }, [handleAddProductToCart, isFetchingProducts, products])

  return (
    <Fragment>
      <Head>
        <title>Produtos - MySide</title>
      </Head>
      <div>
        <Header />
        <S.Container>
          <h1>Produtos</h1>
          <S.ProductGrid>{productItems}</S.ProductGrid>
        </S.Container>
      </div>
    </Fragment>
  )
}

export default Home
