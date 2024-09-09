import { useCallback } from 'react'

import { useAppDispatch } from '@/hooks/shared/useAppDispatch'
import { useAppSelector } from '@/hooks/shared/useAppSelector'

import { cartActions } from './reducer'

export const useCartProducts = () => {
  const storeCartData = useAppSelector((state) => state.cart.data)
  const cart = Array.from(storeCartData.values())

  const dispatch = useAppDispatch()

  const addProductToCart = useCallback(
    (product: TProduct) => {
      dispatch(cartActions.addProductToCart(product))
    },
    [dispatch],
  )

  const removeProductFromCart = useCallback(
    (productId: number) => {
      dispatch(cartActions.removeProductFromCart(productId))
    },
    [dispatch],
  )

  const increaseProductQuantity = useCallback(
    (productId: number) => {
      dispatch(cartActions.increaseProductQuantity(productId))
    },
    [dispatch],
  )

  const decreaseProductQuantity = useCallback(
    (productId: number) => {
      dispatch(cartActions.decreaseProductQuantity(productId))
    },
    [dispatch],
  )

  return {
    cart,
    addProductToCart,
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
  }
}
