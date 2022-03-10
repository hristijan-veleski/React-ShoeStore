import { configureStore } from "@reduxjs/toolkit";
import authContext from "./auth-context";
import bumpButtonContext from "./bumpButton-context";
import cartContext from "./cart-context";
import modalContext from "./modal-context";

const store = configureStore({
  reducer: {
    auth: authContext,
    modal: modalContext,
    cart: cartContext,
    bump:bumpButtonContext,
  },
});

export default store;
