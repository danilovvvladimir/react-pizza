import React from "react";
import { Link } from "react-router-dom";
import pizzaLogo from "../../assets/images/logo128.png";
import cartIcon from "../../assets/images/icons/cart.svg";

import "./Menu.scss";

const Menu = () => {
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
      <div className="cart">
        <Link to="/cart" className="cart__link">
          <div className="cart__price">1290 ₽</div>
          <div className="cart__amount">
            <img src={cartIcon} alt="cart" className="cart__image" />3
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
