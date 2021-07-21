/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import style from './Pagination.module.css';

function Pagination({ currentPage, countriesPerPage, paginate, countries }) {

  const numbers = [];

    //set number of pages
    for (let i = 1; i <= Math.ceil(countries.length/countriesPerPage); i++) {
        numbers.push(i)
    }

  return (
    <div className={style.container}>
      {numbers.map((el, i) => 
        <span className={el === currentPage ? style.active : style.inactive} onClick={() => paginate(el)} key={i}>
          <a>{el}</a>
        </span>
      )}
    </div>
  )
}

export default Pagination;