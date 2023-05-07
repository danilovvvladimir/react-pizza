import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

import "./CartItem.scss";

const CartItem = () => {
  return (
    <div className="cart__item">
      <div className="cart__item-main">
        <img
          src="https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg"
          alt="Пепперони Фреш с перцем"
          className="cart__item-image"
        />
        <div className="cart__item-info">
          <h3 className="cart__item-name">Пепперони Фреш с перцем</h3>
          <div className="cart__item-description">
            <span className="cart__item-type">тонкое</span>,
            <span className="cart__item-size"> 26</span>
            см.
          </div>
        </div>
      </div>
      <div className="cart__item-actions">
        <div className="cart__item-amountbox">
          <button className="btn btn--outlined cart__item-amount-btn">-</button>
          <span className="cart__item-amount">2</span>
          <button className="btn btn--outlined cart__item-amount-btn">+</button>
        </div>
        <div className="cart__item-price">400 ₽</div>
        <button className="cart__item-delete-btn">
          <TiDeleteOutline className="cart__item-delete-btn-icon" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
