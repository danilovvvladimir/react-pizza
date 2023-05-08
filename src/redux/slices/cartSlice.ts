import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, Sort, SortProperty } from "../../models/filterTypes";

// const initialState: FilterSliceState = {
//   totalPrice,
//   cartItems
// };

const cartSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;
export const filterReducer = cartSlice.reducer;
