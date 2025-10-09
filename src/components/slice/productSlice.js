import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    cartItem: localStorage.getItem("cartStores") ? JSON.parse(localStorage.getItem("cartStores")) : [],
    
    wishlist: localStorage.getItem("wishlistStores") ? JSON.parse(localStorage.getItem("wishlistStores")) : [],
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

    addToWishlist: (state, action)=>{
      let finddWish = state.wishlist.findIndex(
    (item) => item.id === action.payload.id
  );
  if (finddWish === -1) {
    state.wishlist.push(action.payload);
    localStorage.setItem("wishlistStores", JSON.stringify(state.wishlist));
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


export const { addToCart, productRemove, increment, decrement, allRemoceCart, addToWishlist } = productSlice.actions

export default productSlice.reducer