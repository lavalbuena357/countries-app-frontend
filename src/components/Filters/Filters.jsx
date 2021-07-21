import React from 'react';
import style from './Filters.module.css';
import SearchBar from './SearchBar/SearchBar';

function Filters() {
  return (
    <div className={style.container}>
      <div className={style.searchContainer}>
        <SearchBar />
      </div>
    </div>
  )
}

export default Filters;