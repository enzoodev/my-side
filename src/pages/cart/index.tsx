import { Fragment, useCallback, useMemo } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { IconShoppingCartOff } from '@tabler/icons-react'
import { toast } from 'react-toastify'

import { useCartProducts } from '@/store/cart'

import { formatPrice } from '@/utils/formatPrice'

import { Header } from '@/components/elements/Header'
import { CartItem } from '@/components/modules/CartItem'
import { ListEmpty } from '@/components/elements/ListEmpty'

import * as S from '@/styles/pages/cart'

const Cart: NextPage = () => {
  const {
    cart,
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    toggleSelectProduct,
  } = useCartProducts()

  const total = useMemo(
    () => ({
      amount: cart.reduce((acc, item) => {
        if (item.isSelected) {
          return (
            acc +
            item.product.price *
              item.quantity *
              (1 - (item.product.discount ?? 0) / 100)
          )
        }
        return acc
      }, 0),
      discount: cart.reduce((acc, item) => {
        if (item.isSelected) {
          return (
            acc +
            item.product.price *
              item.quantity *
              ((item.product.discount ?? 0) / 100)
          )
        }
        return acc
      }, 0),
    }),
    [cart],
  )

  const formattedTotal = {
    amount: formatPrice(total.amount),
    discount: formatPrice(total.discount),
    subtotal: formatPrice(total.amount - total.discount),
  }

  const handleCheckout = useCallback(() => {
    toast.success('Compra realizada com sucesso!')
  }, [])

  const cartData = useMemo(() => {
    if (cart.length === 0) {
      return (
        <ListEmpty
          icon={<IconShoppingCartOff size={28} stroke={1.5} />}
          message="Seu carrinho está vazio."
        />
      )
    }

    return (
      <S.CartContainer>
        <S.CartItemsContainer>
          {cart.map((item) => (
            <CartItem
              key={item.product.id}
              item={item}
              onRemove={removeProductFromCart}
              onIncreaseQuantity={increaseProductQuantity}
              onDecreaseQuantity={decreaseProductQuantity}
              onToggleSelect={toggleSelectProduct}
            />
          ))}
        </S.CartItemsContainer>
        <S.PaymentContainer>
          <S.PaymentHeader>
            <S.PaymentInfo>
              <S.PaymentInfoSubtitle>Subtotal:</S.PaymentInfoSubtitle>
              <S.PaymentInfoTitle>{formattedTotal.subtotal}</S.PaymentInfoTitle>
            </S.PaymentInfo>
            <S.PaymentInfo>
              <S.PaymentInfoSubtitle>Desconto:</S.PaymentInfoSubtitle>
              <S.PaymentInfoTitle>{formattedTotal.discount}</S.PaymentInfoTitle>
            </S.PaymentInfo>
          </S.PaymentHeader>
          <S.PaymentConclusion>
            <S.PaymentInfo>
              <S.PaymentTotalSubtitle>Total:</S.PaymentTotalSubtitle>
              <S.PaymentTotalTitle>{formattedTotal.amount}</S.PaymentTotalTitle>
            </S.PaymentInfo>
            <S.PaymentButton onClick={handleCheckout}>
              Finalizar compra
            </S.PaymentButton>
          </S.PaymentConclusion>
        </S.PaymentContainer>
      </S.CartContainer>
    )
  }, [
    cart,
    decreaseProductQuantity,
    formattedTotal.amount,
    formattedTotal.discount,
    formattedTotal.subtotal,
    handleCheckout,
    increaseProductQuantity,
    removeProductFromCart,
    toggleSelectProduct,
  ])

  return (
    <Fragment>
      <Head>
        <title>Carrinho - MySide</title>
      </Head>
      <S.Container>
        <Header />
        <S.Content>
          <S.Title>Carrinho</S.Title>
          {cartData}
        </S.Content>
      </S.Container>
    </Fragment>
  )
}

export default Cart
