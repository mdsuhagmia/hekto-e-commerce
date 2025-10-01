import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    cartItem: localStorage.getItem("cartStores") ? JSON.parse(localStorage.getItem("cartStores")) : [],
  },
  reducers: {
    addToCart: (state, action) => {
      let findProduct = state.cartItem.findIndex((item)=>item.id == action.payload.id)
      if(findProduct !== -1){
        state.cartItem[findProduct].qun += 1
        localStorage.setItem("cartStores", JSON.stringify(state.cartItem))
      }else{
        state.cartItem = [ ...state.cartItem, action.payload ]
        localStorage.setItem("cartStores", JSON.stringify(state.cartItem))
      }
    },

    productRemove: (state, action)=>{
      state.cartItem.splice(action.payload, 1)
      localStorage.setItem("cartStores", JSON.stringify(state.cartItem))
    },

    increment: (state, action)=>{
      state.cartItem[action.payload].qun += 1
      localStorage.setItem("cartStores", JSON.stringify(state.cartItem))
    },

    decrement: (state, action)=>{
      if(state.cartItem[action.payload].qun > 1){
        state.cartItem[action.payload].qun -= 1
        localStorage.setItem("cartStores", JSON.stringify(state.cartItem))
      }
    },

    allRemoceCart: (state)=>{
      state.cartItem = []
      localStorage.setItem("cartStores", JSON.stringify(state.cartItem))
    },
  },
})


export const { addToCart, productRemove, increment, decrement, allRemoceCart } = productSlice.actions

export default productSlice.reducer