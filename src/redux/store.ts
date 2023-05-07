import { configureStore } from "@reduxjs/toolkit";
import { pizzaReducer } from "./slices/pizzasSlice";

export const store = configureStore({
  reducer: {
    pizzaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
