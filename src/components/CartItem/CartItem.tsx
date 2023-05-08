import React, { FC } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import {
  removeCartItem,
  minusCartItem,
  plusCartItem,
} from "../../redux/slices/cartSlice";

import "./CartItem.scss";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  size: number;
  type: string;
  count: number;
}

const CartItem: FC<CartItemProps> = ({
  id,
  name,
  price,
  imageUrl,
  size,
  type,
  count,
}) => {
  const dispatch = useDispatch();

  const addCurrentCartItem = (currentCartItemId: string) => {
    dispatch(plusCartItem(currentCartItemId));
  };

  const removeCurrentCartItem = (currentCartItemId: string) => {
    if (count <= 1) {
      dispatch(
        removeCartItem({
          id,
          name,
          price,
          imageUrl,
          size,
          type,
        })
      );
    } else {
      dispatch(minusCartItem(currentCartItemId));
    }
  };

  return (
    <div className="cart__item">
      <div className="cart__item-main">
        <img
          src={imageUrl}
          alt="Пепперони Фреш с перцем"
          className="cart__item-image"
        />
        <div className="cart__item-info">
          <h3 className="cart__item-name">{name}</h3>
          <div className="cart__item-description">
            <span className="cart__item-type">{type}</span>,
            <span className="cart__item-size">{size}</span>
            см.
          </div>
        </div>
      </div>
      <div className="cart__item-actions">
        <div className="cart__item-amountbox">
          <button
            className="btn btn--outlined cart__item-amount-btn"
            onClick={() => removeCurrentCartItem(id)}>
            -
          </button>
          <span className="cart__item-amount">{count}</span>
          <button
            className="btn btn--outlined cart__item-amount-btn"
            onClick={() => addCurrentCartItem(id)}>
            +
          </button>
        </div>
        <div className="cart__item-price">{price * count} ₽</div>
        <button
          className="cart__item-delete-btn"
          onClick={() =>
            dispatch(
              removeCartItem({
                id,
                name,
                price,
                imageUrl,
                size,
                type,
              })
            )
          }>
          <TiDeleteOutline className="cart__item-delete-btn-icon" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
