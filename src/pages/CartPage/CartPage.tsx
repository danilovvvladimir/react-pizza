import React from "react";
import { useSelector } from "react-redux";
import Cart from "../../components/Cart/Cart";
import CartEmpty from "../../components/CartEmpty/CartEmpty";
import { RootState } from "../../redux/store";
import "./CartPage.scss";

const CartPage = () => {
  const { cartItems, totalPrice } = useSelector(
    (state: RootState) => state.cartReducer
  );
  return <>{cartItems.length > 0 ? <Cart /> : <CartEmpty />}</>;
};

export default CartPage;
