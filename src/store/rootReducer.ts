import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { cartReducer } from './cart/reducer'

export const rootReducer = persistReducer(
  { key: 'root', storage },
  combineReducers({
    cart: cartReducer,
  }),
)
