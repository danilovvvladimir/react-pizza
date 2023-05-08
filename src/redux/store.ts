import { configureStore } from "@reduxjs/toolkit";
import { pizzaReducer } from "./slices/pizzasSlice";
import { filterReducer } from "./slices/filterSlice";
import { cartReducer } from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    pizzaReducer,
    filterReducer,
    cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
