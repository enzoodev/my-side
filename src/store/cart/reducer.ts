import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: new Map<number, CartProduct>(),
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<TProduct>) => {
      const productId = action.payload.id

      if (state.data.has(productId)) {
        const existingProduct = state.data.get(productId)!
        existingProduct.quantity += 1
        return
      }

      state.data.set(productId, {
        quantity: 1,
        product: action.payload,
      })
    },
    increaseProductQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload

      if (state.data.has(productId)) {
        const existingProduct = state.data.get(productId)!
        existingProduct.quantity += 1
      }
    },
    decreaseProductQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload

      if (state.data.has(productId)) {
        const existingProduct = state.data.get(productId)!

        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1
        } else {
          state.data.delete(productId)
        }
      }
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload
      state.data.delete(productId)
    },
  },
})

export const cartActions = cartSlice.actions

export const cartReducer = cartSlice.reducer
