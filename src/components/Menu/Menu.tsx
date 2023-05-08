import React from "react";
import { Link } from "react-router-dom";
import pizzaLogo from "../../assets/images/logo128.png";

import { IoCartOutline } from "react-icons/io5";

import "./Menu.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Menu = () => {
  const { totalPrice, allItems } = useSelector(
    (state: RootState) => state.cartReducer
  );
  return (
    <nav className="menu">
      <div className="logo">
        <Link to="/" className="logo__link">
          <img src={pizzaLogo} alt="logo" className="logo__image" />
          <div className="logo__text">
            <h1 className="logo__title">React Pizza</h1>
            <div className="logo__subtitle">
              Cамая вкусная пицца во вселенной
            </div>
          </div>
        </Link>
      </div>
      <div className="menu__cart">
        <Link to="/cart" className="menu__cart-link">
          <div className="menu__cart-price">{totalPrice} ₽</div>
          <div className="menu__cart-amount">
            <IoCartOutline className="menu__cart-image" />
            {allItems}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
