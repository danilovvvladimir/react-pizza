import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {
  Pizza,
  PizzasFetchStatus,
  PizzaSliceState,
} from "../../models/pizzasTypes";

const initialState: PizzaSliceState = {
  items: [],
  status: PizzasFetchStatus.LOADING,
};

export const fetchPizzas = createAsyncThunk<Pizza[]>(
  "pizza/fetchPizzasStatus",
  async () => {
    const { data } = await axios.get(
      "https://6454d7aca74f994b334a7b76.mockapi.io/items"
    );
    return data;
  }
);

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = PizzasFetchStatus.LOADING;
      state.items = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = PizzasFetchStatus.SUCCESS;
    });

    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = PizzasFetchStatus.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = pizzasSlice.actions;
export const pizzaReducer = pizzasSlice.reducer;
