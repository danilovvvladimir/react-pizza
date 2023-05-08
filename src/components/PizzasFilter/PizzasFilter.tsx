import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Sort, SortProperty } from "../../models/filterTypes";
import { RootState } from "../../redux/store";
import {
  setSort,
  setCategoryId,
  setSearchValue,
} from "../../redux/slices/filterSlice";
import debounce from "lodash.debounce";
import "./PizzasFilter.scss";

const SORT_LIST: Sort[] = [
  { name: "популярности ↓", sortProperty: SortProperty.RATING_DESC },
  { name: "популярности ↑", sortProperty: SortProperty.RATING_ASC },
  { name: "цене ↓", sortProperty: SortProperty.PRICE_DESC },
  { name: "цене ↑", sortProperty: SortProperty.PRICE_ASC },
  { name: "алфавиту ↓", sortProperty: SortProperty.TITLE_DESC },
  { name: "алфавиту ↑", sortProperty: SortProperty.TITLE_ASC },
];

const CATEGORY_LIST: string[] = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const LI_SORT_CLASSNAME = "pizzas-filter__sort-list-item";
const LI_SORT_ACTIVE_CLASSNAME = "pizzas-filter__sort-list-item--active";
const LI_CATEGORY_CLASSNAME = "pizzas-filter__category-item";
const LI_CATEGORY_ACTIVE_CLASSNAME = "pizzas-filter__category-item--active";

const PizzasFilter = () => {
  const {
    categoryId,
    sort: sortState,
    searchValue,
  } = useSelector((state: RootState) => state.filterReducer);

  const [localValue, setLocalValue] = useState("");
  const [isPopupOpened, setIsPopupOpened] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const onTriggerPopup = (sort: Sort) => {
    dispatch(setSort(sort));
    setIsPopupOpened(false);
  };
  const onTriggerCategory = (newCategoryId: number) => {
    dispatch(setCategoryId(newCategoryId));
  };

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 250),
    [dispatch]
  );

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setIsPopupOpened(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="pizzas-filter">
      <div className="pizzas-filter__nav">
        <ul className="pizzas-filter__category-list">
          {CATEGORY_LIST.map((categoryName, index) => (
            <li
              key={index}
              onClick={() => onTriggerCategory(index)}
              className={
                CATEGORY_LIST[categoryId] === categoryName
                  ? `${LI_CATEGORY_CLASSNAME} ${LI_CATEGORY_ACTIVE_CLASSNAME}`
                  : `${LI_CATEGORY_CLASSNAME}`
              }>
              {categoryName}
            </li>
          ))}
        </ul>
        <div className="pizzas-filter__sort" ref={sortRef}>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"></path>
          </svg>
          Сортировать по:{" "}
          <span
            className="pizzas-filter__sort-type"
            onClick={() => setIsPopupOpened((isPopupOpened) => !isPopupOpened)}>
            {sortState.name}
          </span>
          <div className="pizzas-filter__sort-popup">
            <ul className="pizzas-filter__sort-list">
              {isPopupOpened &&
                SORT_LIST.map((sort) => (
                  <li
                    key={sort.sortProperty}
                    onClick={() => onTriggerPopup(sort)}
                    className={
                      sortState.sortProperty === sort.sortProperty
                        ? `${LI_SORT_CLASSNAME} ${LI_SORT_ACTIVE_CLASSNAME}`
                        : `${LI_SORT_CLASSNAME}`
                    }>
                    {sort.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="pizzas-filter__search">
        <AiOutlineSearch className="pizzas-filter__search-icon" />

        <input
          value={localValue}
          onChange={(event) => handleChangeValue(event)}
          className="pizzas-filter__search-input"
          placeholder="Введите название пиццы..."
        />
      </div>
    </div>
  );
};

export default PizzasFilter;
