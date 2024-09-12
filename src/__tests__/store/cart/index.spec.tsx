import { renderHook, act } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { cartReducer } from '@/store/cart/reducer'
import { useCartProducts } from '@/store/cart'

const createTestStore = (initialState = { cart: { data: {} } }) => {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
    preloadedState: initialState,
  })
}

describe('useCartProducts', () => {
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

  it('should add a product to the cart', () => {
    const store = createTestStore()
    const { result } = renderHook(() => useCartProducts(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    })

    act(() => {
      result.current.addProductToCart(product)
    })

    const state = store.getState().cart
    expect(state.data[1]).toEqual({
      quantity: 1,
      isSelected: true,
      product,
    })
  })

  it('should remove a product from the cart', () => {
    const initialState = {
      cart: {
        data: {
          1: {
            quantity: 1,
            isSelected: true,
            product: { id: 1, name: 'Product 1', price: 100 },
          },
        },
      },
    }
    const store = createTestStore(initialState)
    const { result } = renderHook(() => useCartProducts(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    })

    act(() => {
      result.current.removeProductFromCart(1)
    })

    const state = store.getState().cart
    expect(state.data[1]).toBeUndefined()
  })

  it('should increase the quantity of a product', () => {
    const initialState = {
      cart: {
        data: {
          1: {
            quantity: 1,
            isSelected: true,
            product: { id: 1, name: 'Product 1', price: 100 },
          },
        },
      },
    }
    const store = createTestStore(initialState)
    const { result } = renderHook(() => useCartProducts(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    })

    act(() => {
      result.current.increaseProductQuantity(1)
    })

    const state = store.getState().cart
    expect(state.data[1].quantity).toBe(2)
  })

  it('should decrease the quantity of a product', () => {
    const initialState = {
      cart: {
        data: {
          1: {
            quantity: 2,
            isSelected: true,
            product: { id: 1, name: 'Product 1', price: 100 },
          },
        },
      },
    }
    const store = createTestStore(initialState)
    const { result } = renderHook(() => useCartProducts(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    })

    act(() => {
      result.current.decreaseProductQuantity(1)
    })

    const state = store.getState().cart
    expect(state.data[1].quantity).toBe(1)
  })

  it('should toggle the selection of a product', () => {
    const initialState = {
      cart: {
        data: {
          1: {
            quantity: 1,
            isSelected: true,
            product: { id: 1, name: 'Product 1', price: 100 },
          },
        },
      },
    }
    const store = createTestStore(initialState)
    const { result } = renderHook(() => useCartProducts(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    })

    act(() => {
      result.current.toggleSelectProduct(1)
    })

    const state = store.getState().cart
    expect(state.data[1].isSelected).toBe(false)
  })
})
