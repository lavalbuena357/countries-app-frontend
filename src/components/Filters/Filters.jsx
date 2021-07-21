import React from 'react';
import style from './Filters.module.css';
import SearchBar from './SearchBar/SearchBar';

function Filters() {
  return (
    <div className={style.container}>
      <SearchBar />
    </div>
  )
}

export default Filters;