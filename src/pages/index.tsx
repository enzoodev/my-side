import { Fragment, useCallback, useMemo } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { useCartProducts } from '@/store/cart'

import { useGetCategories } from '@/hooks/products/useGetCategories'
import { useGetProducts } from '@/hooks/products/useGetProducts'

import { Routes } from '@/enums/Routes'

import { Input } from '@/components/elements/Input'
import { Header } from '@/components/elements/Header'
import { Dropdown } from '@/components/elements/Dropdown'
import { Pagination } from '@/components/elements/Pagination'
import { ProductItem } from '@/components/modules/ProductItem'
import { ProductSkeletonItem } from '@/components/modules/ProductSkeletonItem'

import { generateId } from '@/utils/generateId'
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'

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

  const formattedCategories = useMemo(() => {
    if (isFetchingCategories || !categories || categories.length === 0) {
      return []
    }

    return categories.map((category) => ({
      label: capitalizeFirstLetter(category),
      value: category,
    }))
  }, [categories, isFetchingCategories])

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
      <S.Container>
        <Header />
        <S.Content>
          <S.TitleWrapper>
            <S.Title>Produtos</S.Title>
            <S.FilterWrapper>
              <Dropdown
                placeholder="Selecionar categoria"
                options={formattedCategories}
                selectedOption={category}
                onSelectValue={handleSetCategory}
                style={{ width: '15rem' }}
              />
              <Input
                placeholder="Qual produto você procura?"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                style={{ width: '20rem' }}
              />
            </S.FilterWrapper>
          </S.TitleWrapper>
          <S.ProductGrid>{productItems}</S.ProductGrid>
          <Pagination
            totalPages={3} // get this value from the API
            currentPage={page}
            onSetPage={handleSetPage}
            onGoToPreviousPage={handleGoToPreviousPage}
            onGoToNextPage={handleGoToNextPage}
          />
        </S.Content>
      </S.Container>
    </Fragment>
  )
}

export default Home
