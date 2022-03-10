import { createSlice } from "@reduxjs/toolkit";

const cartContext = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.cart.push({
          id: newItem.id,
          title: newItem.title,
          image: newItem.image,
          description: newItem.description,
          amount: newItem.amount,
          price: newItem.price,
          totalPrice: newItem.price * newItem.amount,
        });
      } else {
        existingItem.amount++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem.amount === 1) {
        state.cart = state.cart.filter((item) => {return item.id !== existingItem.id});
      } else {
        existingItem.amount--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    resetCart:(state)=>{
      state.cart = [];
    }
  },
});

export const cartActions = cartContext.actions;
export default cartContext.reducer;
