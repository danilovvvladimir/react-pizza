import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ICartItem,
  CartSliceState,
  IPizzaCartItem,
} from "../../models/cartTypes";
import { calcAllItems } from "../../utils/calcAllItems";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { getCartFromLS } from "../../utils/getCartFromLS";

// const initialState: CartSliceState = {
//   totalPrice: 0,
//   allItems: 0,
//   cartItems: [],
// };

const initialState: CartSliceState = getCartFromLS();

const cartSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addCartItem(state, action: PayloadAction<IPizzaCartItem>) {
      const findItem = state.cartItems.find((cartItem) => {
        return (
          cartItem.id === action.payload.id &&
          cartItem.size === action.payload.size &&
          cartItem.type === action.payload.type
        );
      });

      if (findItem) {
        findItem.count++;
      } else {
        state.cartItems.push({
          ...action.payload,
          count: 1,
        });
      }

      state.allItems = calcAllItems(state.cartItems);
      state.totalPrice = calcTotalPrice(state.cartItems);
    },
    plusCartItem(state, action: PayloadAction<string>) {
      const findItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload
      );

      if (findItem) {
        findItem.count++;
      }

      state.allItems = calcAllItems(state.cartItems);
      state.totalPrice = calcTotalPrice(state.cartItems);
    },
    minusCartItem(state, action: PayloadAction<string>) {
      const findItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload
      );

      if (findItem) {
        findItem.count--;
      }
      state.allItems = calcAllItems(state.cartItems);
      state.totalPrice = calcTotalPrice(state.cartItems);
    },
    removeCartItem(state, action: PayloadAction<IPizzaCartItem>) {
      state.cartItems = state.cartItems.filter((cartItem) => {
        if (
          cartItem.id === action.payload.id &&
          cartItem.size === action.payload.size &&
          cartItem.type === action.payload.type
        ) {
          return false;
        }

        return true;
      });

      state.allItems = calcAllItems(state.cartItems);
      state.totalPrice = calcTotalPrice(state.cartItems);
    },
    clearCart(state) {
      state.totalPrice = 0;
      state.cartItems = [];
      state.allItems = 0;
    },
  },
});

export const {
  addCartItem,
  clearCart,
  removeCartItem,
  minusCartItem,
  plusCartItem,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
