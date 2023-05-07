import React from "react";
import PizzasFilter from "../../components/PizzasFilter/PizzasFilter";
import PizzasList from "../../components/PizzasList/PizzasList";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="pizzas">
      <PizzasFilter />
      <PizzasList />
    </div>
  );
};

export default HomePage;
