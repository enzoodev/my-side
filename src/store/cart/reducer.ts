import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type CartState = {
  data: Record<string, CartProduct>
}

const initialState: CartState = {
  data: {},
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<TProduct>) => {
      const productId = action.payload.id

      if (state.data[productId]) {
        state.data[productId].quantity += 1
      } else {
        state.data[productId] = {
          quantity: 1,
          product: action.payload,
        }
      }
    },
    increaseProductQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload

      if (state.data[productId]) {
        state.data[productId].quantity += 1
      }
    },
    decreaseProductQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload

      if (state.data[productId]) {
        const product = state.data[productId]

        if (product.quantity > 1) {
          product.quantity -= 1
        } else {
          delete state.data[productId]
        }
      }
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload
      delete state.data[productId]
    },
  },
})

export const cartActions = cartSlice.actions

export const cartReducer = cartSlice.reducer
