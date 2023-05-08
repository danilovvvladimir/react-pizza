import { ICartItem } from "../models/cartTypes";

export const calcAllItems = (items: ICartItem[]) => {
  return items.reduce((sum, obj) => obj.count + sum, 0);
};
