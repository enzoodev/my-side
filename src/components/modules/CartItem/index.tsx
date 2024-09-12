import React, { memo, useMemo } from 'react'
import { IconMinus, IconPlus, IconTrash } from '@tabler/icons-react'

import { formatPrice } from '@/utils/formatPrice'

import * as S from './styles'

interface CartItemProps {
  item: TCartProduct
  onIncreaseQuantity: (id: number) => void
  onDecreaseQuantity: (id: number) => void
  onRemove: (id: number) => void
  onToggleSelect: (id: number) => void
}

export const CartItem: React.NamedExoticComponent<CartItemProps> = memo(
  function CartItem({
    item,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onRemove,
    onToggleSelect,
  }) {
    const { product, quantity, isSelected } = item

    const formattedPrice = useMemo(
      () =>
        formatPrice(
          quantity * product.price * (1 - (product.discount ?? 0) / 100),
        ),
      [product.discount, product.price, quantity],
    )

    return (
      <S.CartItemContainer>
        <S.LeftSection>
          <S.ProductSection>
            <S.Checkbox
              checked={isSelected}
              onChange={() => onToggleSelect(product.id)}
            />
            <S.ProductImage src={product.image} alt={product.title} />
          </S.ProductSection>
          <S.ProductTitle>{product.title}</S.ProductTitle>
        </S.LeftSection>
        <S.RightSection>
          <S.ActionsSection>
            <S.QuantitySection>
              <S.QuantityButton
                onClick={() => onDecreaseQuantity(product.id)}
                data-testid="decrease-button"
              >
                <IconMinus size={20} />
              </S.QuantityButton>
              <S.QuantityText>{quantity}</S.QuantityText>
              <S.QuantityButton
                onClick={() => onIncreaseQuantity(product.id)}
                data-testid="increase-button"
              >
                <IconPlus size={20} />
              </S.QuantityButton>
            </S.QuantitySection>
            <S.RemoveButton onClick={() => onRemove(product.id)}>
              <IconTrash size={20} stroke={1.75} />
              Excluir
            </S.RemoveButton>
          </S.ActionsSection>
          <S.PriceSection>
            <S.FinalPrice>{formattedPrice}</S.FinalPrice>
            <S.DiscountText>
              {product.discount ?? 0}% de desconto
            </S.DiscountText>
          </S.PriceSection>
        </S.RightSection>
      </S.CartItemContainer>
    )
  },
)
