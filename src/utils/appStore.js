import { configureStore } from "@reduxjs/toolkit";

//Since we exported it as default we dont have to import it has cartSlice.reducer , we could just import it as cartSlice
import cartSlice from "./cartSlice";

const appStore = configureStore({
  //inside our reducer we cann add all the slices of our store
  reducer: {
    cart: cartSlice,
  },
});

export default appStore;
