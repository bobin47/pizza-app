import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './shopping-cart/cartSlice'
import cartUISlice from './shopping-cart/cartUiSlice'
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUI:cartUISlice.reducer,
  },
});

export default store;