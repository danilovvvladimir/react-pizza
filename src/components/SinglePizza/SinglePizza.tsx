import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../redux/slices/cartSlice";
import "./SinglePizza.scss";

interface SinglePizzaProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
}

const TYPE_NAMES = ["традиционная", "тонкая"];
const LI_TYPE_CLASSNAME = "single-pizza__types-list-item";
const LI_TYPE_ACTIVE_CLASSNAME = "single-pizza__types-list-item--active";
const LI_SIZE_CLASSNAME = "single-pizza__sizes-list-item";
const LI_SIZE_ACTIVE_CLASSNAME = "single-pizza__types-list-item--active";

const SinglePizza: FC<SinglePizzaProps> = ({
  id,
  name,
  price,
  imageUrl,
  sizes,
  types,
}) => {
  const [activeType, setActiveType] = React.useState<number>(types[0]);
  const [activeSize, setActiveSize] = React.useState<number>(0);
  const dispatch = useDispatch();

  const addPizza = () => {
    dispatch(
      addCartItem({
        id,
        name,
        price,
        imageUrl,
        size: sizes[activeSize],
        type: TYPE_NAMES[activeType],
      })
    );
  };

  return (
    <div className="single-pizza">
      <img
        src={imageUrl}
        alt="Пепперони Фреш с перцем"
        className="single-pizza__image"
      />
      <h3 className="single-pizza__name">{name}</h3>
      <div className="single-pizza__info">
        <ul className="single-pizza__types-list">
          {types.map((typeId) => (
            <li
              key={typeId}
              onClick={() => setActiveType(typeId)}
              className={
                activeType === typeId
                  ? `${LI_TYPE_CLASSNAME} ${LI_TYPE_ACTIVE_CLASSNAME}`
                  : `${LI_TYPE_CLASSNAME}`
              }>
              {TYPE_NAMES[typeId]}
            </li>
          ))}
        </ul>
        <ul className="single-pizza__sizes-list">
          {sizes.map((size, i) => (
            <li
              key={size}
              onClick={() => setActiveSize(i)}
              className={
                activeSize === i
                  ? `${LI_SIZE_CLASSNAME} ${LI_SIZE_ACTIVE_CLASSNAME}`
                  : `${LI_SIZE_CLASSNAME}`
              }>
              {size} см.
            </li>
          ))}
        </ul>
      </div>

      <div className="single-pizza__bottom">
        <div className="single-pizza__pricebox">
          от <span className="single-pizza__price">{price}</span> ₽
        </div>
        <button
          className="btn btn--outlined single-pizza__btn"
          onClick={addPizza}>
          Добавить
        </button>
      </div>
    </div>
  );
};

export default SinglePizza;
