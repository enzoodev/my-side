import React from 'react'
import Link from 'next/link'

import { Routes } from '@/enums/Routes'

import { cutText } from '@/utils/cutText'
import { formatPrice } from '@/utils/formatPrice'

import * as S from './styles'

type Props = {
  item: TProduct
  onAddProductToCart: () => void
}

export const ProductItem: React.NamedExoticComponent<Props> = React.memo(
  function ProductItem({ item, onAddProductToCart }) {
    const cutedTitle = cutText(item.title, 40)
    const cutedDescription = cutText(item.description, 80)
    const formattedPrice = formatPrice(item.price)

    return (
      <S.ProductCard>
        <Link href={`${Routes.PRODUCTS}/${item.id}`}>
          <S.ProductImage src={item.image} alt={cutedTitle} />
        </Link>
        <S.AddToCartButton onClick={onAddProductToCart}>
          <S.AddToCartIcon />
        </S.AddToCartButton>
        <Link href={`${Routes.PRODUCTS}/${item.id}`}>
          <S.ProductInfo>
            <S.ProductTitle>{cutedTitle}</S.ProductTitle>
            <S.ProductInfoContentWrapper>
              <S.ProductInfoWrapper>
                <S.ProductInfoSubtitle>Preço:</S.ProductInfoSubtitle>
                <S.ProductInfoTitle>{formattedPrice}</S.ProductInfoTitle>
              </S.ProductInfoWrapper>
              <S.ProductInfoWrapper>
                <S.ProductInfoSubtitle>Categoria:</S.ProductInfoSubtitle>
                <S.ProductInfoTitle>{item.category}</S.ProductInfoTitle>
              </S.ProductInfoWrapper>
              <S.ProductInfoWrapper>
                <S.ProductInfoSubtitle>Descrição:</S.ProductInfoSubtitle>
                <S.ProductInfoTitle>{cutedDescription}</S.ProductInfoTitle>
              </S.ProductInfoWrapper>
            </S.ProductInfoContentWrapper>
          </S.ProductInfo>
        </Link>
      </S.ProductCard>
    )
  },
)
