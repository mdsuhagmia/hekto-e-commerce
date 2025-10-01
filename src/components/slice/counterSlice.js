// src/components/slice/ProductSlice.js
import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: {
    cartItem: localStorage.getItem("cartStores") ? JSON.parse(localStorage.getItem("cartStores")) : [],
  },
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.cartItem.findIndex(item => item.id === action.payload.id)
      if(findProduct !== -1){
        state.cartItem[findProduct].qun += 1
      } else {
        state.cartItem.push(action.payload)
      }
      localStorage.setItem("cartStores", JSON.stringify(state.cartItem))
    },

    productRemove: (state, action) => {
      state.cartItem.splice(action.payload, 1)
      localStorage.setItem("cartStores", JSON.stringify(state.cartItem))
    },

    increment: (state, action) => {
      state.cartItem[action.payload].qun += 1
      localStorage.setItem("cartStores", JSON.stringify(state.cartItem))
    },

    decrement: (state, action) => {
      if(state.cartItem[action.payload].qun > 1){
        state.cartItem[action.payload].qun -= 1
        localStorage.setItem("cartStores", JSON.stringify(state.cartItem))
      }
    },

    allRemoveCart: (state) => {
      state.cartItem = []
      localStorage.setItem("cartStores", JSON.stringify(state.cartItem))
    },
  },
})

export const { addToCart, productRemove, increment, decrement, allRemoveCart } = productSlice.actions
export default productSlice.reducer
