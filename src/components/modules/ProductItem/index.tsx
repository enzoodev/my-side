import React from 'react'

import { formatPrice } from '@/utils/formatPrice'
import { cutText } from '@/utils/cutText'

import * as S from './styles'

type Props = {
  item: TProduct
  onGoToProduct: () => void
  onAddProductToCart: () => void
}

export const ProductItem: React.NamedExoticComponent<Props> = React.memo(
  function ProductItem({ item, onGoToProduct, onAddProductToCart }) {
    const cutedTitle = cutText(item.title, 40)
    const cutedDescription = cutText(item.description, 80)
    const formattedPrice = formatPrice(item.price)

    return (
      <S.ProductCard onClick={onGoToProduct}>
        <S.ProductImage src={item.image} alt={cutedTitle} />
        <S.AddToCartButton
          onClick={(e) => {
            e.stopPropagation()
            onAddProductToCart()
          }}
        >
          Adicionar
        </S.AddToCartButton>
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
      </S.ProductCard>
    )
  },
)
