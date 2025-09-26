import { configureStore } from '@reduxjs/toolkit'
import productSlice from './components/slice/ProductSlice'

export default configureStore({
  reducer: {
    product: productSlice
  },
})