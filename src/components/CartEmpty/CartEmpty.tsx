import React from "react";
import { Link } from "react-router-dom";
import cartEmptyImage from "../../assets/images/empty-cart.png";

import "./CartEmpty.scss";

const CartEmpty = () => {
  return (
    <div className="cart-empty">
      <h2 className="cart-empty__title">Корзина пуста</h2>
      <p className="cart-empty__subtitle">
        Вероятней всего, вы ещё не осуществили заказ.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img
        src={cartEmptyImage}
        alt="empty cart img"
        className="cart-empty__image"
      />
      <Link to="/" className="cart-empty__btn-back">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default CartEmpty;
