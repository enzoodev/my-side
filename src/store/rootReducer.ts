import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'

import { cartReducer } from './cart/reducer'
import { storage } from './storage'

export const rootReducer = persistReducer(
  { key: 'root', storage },
  combineReducers({
    cart: cartReducer,
  }),
)
