import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, Sort, SortProperty } from "../../models/filterTypes";

const initialState: FilterSliceState = {
  categoryId: 0,
  sort: {
    name: "популярности",
    sortProperty: SortProperty.RATING_DESC,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setSort } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
