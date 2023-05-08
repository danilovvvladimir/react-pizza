import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, Sort, SortProperty } from "../../models/filterTypes";

const initialState: FilterSliceState = {
  categoryId: 0,
  sort: {
    name: "популярности ↓",
    sortProperty: SortProperty.RATING_DESC,
  },
  currentPage: 0,
  searchValue: "",
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
    setCurrentPageAction(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoryId, setSort, setCurrentPageAction, setSearchValue } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
