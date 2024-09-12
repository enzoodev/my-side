import { Fragment, useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import Head from 'next/head'
import { IconCameraOff } from '@tabler/icons-react'

import { useCartProducts } from '@/store/cart'

import { useGetProduct } from '@/hooks/products/useGetProduct'

import { Routes } from '@/enums/Routes'

import { formatPrice } from '@/utils/formatPrice'

import { Header } from '@/components/elements/Header'
import { ListEmpty } from '@/components/elements/ListEmpty'

import * as S from '@/styles/pages/products'

const Product: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { product, isFetchingProduct } = useGetProduct(parseInt(id as string))
  const { addProductToCart } = useCartProducts()
  const formattedPrice = product ? formatPrice(product.price) : ''
  const formattedPreviousPrice = product
    ? formatPrice(product.price / (1 - (product.discount ?? 0) / 100))
    : ''

  const handleAddProductToCart = useCallback(() => {
    if (!product) {
      return
    }

    addProductToCart(product)
    router.push(Routes.CART)
  }, [addProductToCart, product, router])

  const content = useMemo(() => {
    if (isFetchingProduct) {
      return (
        <S.Content>
          <S.InfoContainer>
            <S.Skeleton
              style={{ height: '20px', width: '20%' }}
              data-testid="skeleton"
            />
            <S.Skeleton
              style={{ height: '100px', width: '80%' }}
              data-testid="skeleton"
            />
            <S.Skeleton
              style={{ height: '70px', width: '40%' }}
              data-testid="skeleton"
            />
            <S.Skeleton
              style={{ height: '30px', width: '30%' }}
              data-testid="skeleton"
            />
            <S.Skeleton
              style={{ height: '30px', width: '30%' }}
              data-testid="skeleton"
            />
            <S.Skeleton
              style={{ height: '30px', width: '30%' }}
              data-testid="skeleton"
            />
            <S.Skeleton
              style={{ height: '200px', width: '80%' }}
              data-testid="skeleton"
            />
            <S.Skeleton
              style={{ height: '60px', width: '40%' }}
              data-testid="skeleton"
            />
          </S.InfoContainer>
          <S.ImageContainer>
            <S.Skeleton
              style={{ width: '100%', height: '550px' }}
              data-testid="skeleton"
            />
          </S.ImageContainer>
        </S.Content>
      )
    }

    if (!product) {
      return (
        <S.Content>
          <ListEmpty
            icon={<IconCameraOff size={28} stroke={1.5} />}
            message="Produto não encontrado."
          />
        </S.Content>
      )
    }

    return (
      <S.Content>
        <S.InfoContainer>
          <S.InfoWrapper>
            <S.InfoSubtitle>Categoria:</S.InfoSubtitle>
            <S.InfoTitle>{product.category}</S.InfoTitle>
          </S.InfoWrapper>
          <S.Title>{product.title}</S.Title>
          <S.PriceContainer>
            <S.Price>{formattedPrice}</S.Price>
            <S.Discount>{product.discount ?? 0}% OFF</S.Discount>
            <S.PreviousPrice>{formattedPreviousPrice}</S.PreviousPrice>
          </S.PriceContainer>
          <S.InfoWrapper>
            <S.InfoSubtitle>Marca:</S.InfoSubtitle>
            <S.InfoTitle>{product.brand}</S.InfoTitle>
          </S.InfoWrapper>
          <S.InfoWrapper>
            <S.InfoSubtitle>Modelo:</S.InfoSubtitle>
            <S.InfoTitle>{product.model}</S.InfoTitle>
          </S.InfoWrapper>
          <S.InfoWrapper>
            <S.InfoSubtitle>Cor:</S.InfoSubtitle>
            <S.InfoTitle>{product.color}</S.InfoTitle>
          </S.InfoWrapper>
          <S.DescriptionContainer>
            <S.DescriptionLabel>Descrição:</S.DescriptionLabel>
            <S.Description>{product.description}</S.Description>
          </S.DescriptionContainer>
          <S.AddToCartButton onClick={handleAddProductToCart}>
            Adicionar ao Carrinho
          </S.AddToCartButton>
        </S.InfoContainer>
        <S.ImageContainer>
          <S.ProductImage src={product.image} alt={product.title} />
        </S.ImageContainer>
      </S.Content>
    )
  }, [
    formattedPreviousPrice,
    formattedPrice,
    handleAddProductToCart,
    isFetchingProduct,
    product,
  ])

  return (
    <Fragment>
      <Head>
        <title>Produtos - MySide</title>
      </Head>
      <S.Container>
        <Header />
        {content}
      </S.Container>
    </Fragment>
  )
}

export default Product
