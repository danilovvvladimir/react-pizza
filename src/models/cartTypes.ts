export interface ICartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  size: number;
  type: string;
  count: number;
}

export interface IPizzaCartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  size: number;
  type: string;
}

export interface CartSliceState {
  totalPrice: number;
  allItems: number;
  cartItems: ICartItem[];
}
