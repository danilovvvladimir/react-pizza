import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PizzasFetchStatus } from "../../models/pizzasTypes";
import { fetchPizzas } from "../../redux/slices/pizzasSlice";
import { AppDispatch, RootState } from "../../redux/store";
import SinglePizza from "../SinglePizza/SinglePizza";
import { SinglePizzaSkeleton } from "../SinglePizza/SinglePizzaSkeleton";

import "./PizzasList.scss";

const skeletons = [...new Array(6)].map((_, index) => (
  <SinglePizzaSkeleton key={index} />
));

const PizzasList: FC = () => {
  const {
    categoryId,
    sort: sortState,
    currentPage,
  } = useSelector((state: RootState) => state.filterReducer);
  const { items, status } = useSelector(
    (state: RootState) => state.pizzaReducer
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const sortBy = sortState.sortProperty.replace("-", "");
    const order = sortState.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        currentPage,
      })
    );
  }, [sortState.sortProperty, categoryId, currentPage]);

  const pizzas = items.map((item) => <SinglePizza key={item.id} {...item} />);

  return (
    <div className="pizzas-list">
      {status === PizzasFetchStatus.LOADING ? skeletons : pizzas}
    </div>
  );
};

export default PizzasList;
