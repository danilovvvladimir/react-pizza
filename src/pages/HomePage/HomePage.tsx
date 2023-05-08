import Pagination from "../../components/Pagination/Pagination";
import PizzasFilter from "../../components/PizzasFilter/PizzasFilter";
import PizzasList from "../../components/PizzasList/PizzasList";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="pizzas">
      <PizzasFilter />
      <PizzasList />
      <Pagination />
    </div>
  );
};

export default HomePage;
