import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { BsArrowLeftSquare } from "react-icons/bs";

import "./Cart.scss";
import CartItem from "../CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { clearCart } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, totalPrice, allItems } = useSelector(
    (state: RootState) => state.cartReducer
  );
  const dispatch = useDispatch();

  console.log(cartItems);

  return (
    <div className="cart">
      <div className="cart__top">
        <h2 className="cart__title">
          <IoCartOutline /> Корзина
        </h2>
        <button
          className="cart__btn-clear"
          onClick={() => dispatch(clearCart())}>
          <MdDeleteForever />
          Очистить корзину
        </button>
      </div>
      <div className="cart__content">
        <div className="cart__items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))}
        </div>
      </div>
      <div className="cart__bottom">
        <div className="cart__info">
          <div className="cart__info-amount">
            Всего пицц:
            <span className="cart__info-amount-span">{allItems} шт.</span>
          </div>
          <div className="cart__info-price">
            Сумма заказа:
            <span className="cart__info-price-span">{totalPrice} ₽</span>
          </div>
        </div>
        <div className="cart__btns">
          <Link to="/" className="btn btn--gray cart__btn-back">
            <BsArrowLeftSquare className="cart__btn-back-icon" />
            Вернуться назад
          </Link>
          <button className="btn btn--filled cart__btn-pay">
            Оплатить сейчас
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
