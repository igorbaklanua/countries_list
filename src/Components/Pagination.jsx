import React from 'react';

const Pagination = ({ totalCountries, countriesPerPage, paginate, currentPage }) => {
  let pagesCount = Math.ceil(totalCountries / countriesPerPage);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      {pages.map(number => (
        <button
          className={
            currentPage === number
              ? 'btn-secondary btn-sm ms-1 btn-active'
              : 'btn-secondary btn-sm ms-1'
          }
          key={number}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};
export default Pagination;
