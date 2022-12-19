import React, { useState } from "react";
import { useSelector } from "react-redux";
import PaginationStyle from "../scss/Pagination.module.scss";
const Pagination = ({
  postsPerPage,
  totalPost,
  setPage,
  page,
  onPrevious,
  onNext,
  prev,
  next,
}) => {
  const {charactersData} = useSelector((state)=>state.api)

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost+charactersData.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handlePrevious = () => {
    onPrevious();
  };
  const handleNext = () => {
    onNext();
  };
  return (
    <nav>
      <ul>
        <div className={PaginationStyle.center}>
          <div className={PaginationStyle.pagination}>
            {prev ? (
              <button onClick={handlePrevious}>&laquo;</button>
            ) : (
              <button>&laquo;</button>
            )}

            <button onClick={() => setPage((pro) => pro === 1 ? pro : pro - 1)}>
              {" "}
              safa geri&laquo;
            </button>

            {pageNumbers.map((number) => (
              <button
                key={number}
                className={ page === number ? PaginationStyle.active:null }
                onClick={() => setPage(number)}
              >
                {number}
              </button>
            ))}
            <button onClick={() => setPage((nexo) => nexo === pageNumbers.length ? nexo: nexo + 1)}>
              
              &raquo; sayfa ileri
            </button>

            {next ? (
              <button onClick={handleNext}> &raquo;</button>
            ) : (
              <button>&raquo;</button>
            )}
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Pagination;
