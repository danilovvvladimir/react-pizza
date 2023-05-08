import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setCurrentPageAction } from "../../redux/slices/filterSlice";

import "./Pagination.scss";
const PAGINATION_BTN_ARRAY = [...new Array(2)];

const Pagination: FC = () => {
  console.log("Rerendered");

  const currentPage = useSelector(
    (state: RootState) => state.filterReducer.currentPage
  );
  const dispatch = useDispatch();

  const setCurrentPage = (newPageNumber: number) => {
    dispatch(setCurrentPageAction(newPageNumber));
  };

  const changeCurrentPage = (direction: number) => {
    if (currentPage + direction > PAGINATION_BTN_ARRAY.length - 1) {
      setCurrentPage(0);
      return;
    }
    if (currentPage + direction < 0) {
      setCurrentPage(PAGINATION_BTN_ARRAY.length - 1);
      return;
    }
    setCurrentPage(currentPage + direction);
  };

  return (
    <div className="pagination">
      <button
        className="btn btn--outlined pagination__control-btn"
        onClick={() => changeCurrentPage(-1)}>
        &lt;
      </button>
      <ul className="pagination__list">
        {PAGINATION_BTN_ARRAY.map((_, index) => (
          <li
            key={index}
            className={`pagination__list-item ${
              currentPage === index && `pagination__list-item--active`
            }`}
            onClick={() => setCurrentPage(index)}>
            <button className="btn btn--outlined">{index + 1}</button>
          </li>
        ))}
      </ul>
      <button
        className="btn btn--outlined pagination__control-btn"
        onClick={() => changeCurrentPage(1)}>
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
