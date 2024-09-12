import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from '../../../store/cart/reducer'

describe('cartSlice', () => {
  const { actions, reducer } = cartSlice
  const store = configureStore({ reducer: { cart: reducer } })

  const product: TProduct = {
    id: 1,
    price: 100,
    discount: 10,
    image: '/path/to/image.jpg',
    title: '',
    description: '',
    brand: '',
    model: '',
    color: '',
    category: '',
  }

  it('should handle addProductToCart', () => {
    store.dispatch(actions.addProductToCart(product))
    const state = store.getState().cart
    expect(state.data[1]).toEqual({
      quantity: 1,
      isSelected: true,
      product,
    })
  })

  it('should handle increaseProductQuantity', () => {
    store.dispatch(actions.addProductToCart(product))
    store.dispatch(actions.increaseProductQuantity(1))
    const state = store.getState().cart
    expect(state.data[1].quantity).toBe(3)
  })

  it('should handle decreaseProductQuantity', () => {
    store.dispatch(actions.addProductToCart(product))
    store.dispatch(actions.increaseProductQuantity(1))
    store.dispatch(actions.decreaseProductQuantity(1))
    const state = store.getState().cart
    expect(state.data[1].quantity).toBe(4)
  })

  it('should handle removeProductFromCart', () => {
    store.dispatch(actions.addProductToCart(product))
    store.dispatch(actions.removeProductFromCart(1))
    const state = store.getState().cart
    expect(state.data[1]).toBeUndefined()
  })

  it('should handle toggleSelectProduct', () => {
    store.dispatch(actions.addProductToCart(product))
    store.dispatch(actions.toggleSelectProduct(1))
    const state = store.getState().cart
    expect(state.data[1].isSelected).toBe(false)
  })
})
