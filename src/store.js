// src/store.js
import { configureStore } from '@reduxjs/toolkit'
import productReducer from './components/slice/ProductSlice'

const store = configureStore({
  reducer: {
    product: productReducer
  },
})

export default store
