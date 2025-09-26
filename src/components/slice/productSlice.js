import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    cartItem: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let findProduct = state.cartItem.findIndex((item)=> item.id == action.payload.id)
        if(findProduct !== -1){
          state.cartItem[findProduct].qun += 1
        }else{
          state.cartItem = [...state.cartItem, action.payload]
        }
    },
  },
})


export const { addToCart } = productSlice.actions

export default productSlice.reducer