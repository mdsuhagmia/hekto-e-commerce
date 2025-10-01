import { configureStore } from '@reduxjs/toolkit'
import productSlice from './components/slice/counterSlice'

export default configureStore({
  reducer: {
    product: productSlice
  },
})