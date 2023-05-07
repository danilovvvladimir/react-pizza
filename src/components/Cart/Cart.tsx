import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { BsArrowLeftSquare } from "react-icons/bs";

import "./Cart.scss";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__top">
        <h2 className="cart__title">
          <IoCartOutline /> Корзина
        </h2>
        <button className="cart__btn-clear">
          <MdDeleteForever />
          Очистить корзину
        </button>
      </div>
      <div className="cart__content">
        <div className="cart__items">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
      <div className="cart__bottom">
        <div className="cart__info">
          <div className="cart__info-amount">
            Всего пицц: <span className="cart__info-amount-span">3 шт.</span>
          </div>
          <div className="cart__info-price">
            Сумма заказа: <span className="cart__info-price-span">3000 ₽</span>
          </div>
        </div>
        <div className="cart__btns">
          <button className="btn btn--gray cart__btn-back">
            <BsArrowLeftSquare className="cart__btn-back-icon" />
            Вернуться назад
          </button>
          <button className="btn btn--filled cart__btn-pay">
            Оплатить сейчас
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
