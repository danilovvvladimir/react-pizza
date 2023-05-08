import { ICartItem } from "../models/cartTypes";
import { calcAllItems } from "./calcAllItems";
import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLS = () => {
  const data = localStorage.getItem("cart");
  console.log(data);

  const cartItems: ICartItem[] = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(cartItems);
  const allItems = calcAllItems(cartItems);

  console.log(cartItems);
  console.log(totalPrice);
  console.log(allItems);

  return {
    cartItems,
    totalPrice,
    allItems,
  };
};
