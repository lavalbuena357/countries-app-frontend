import React from 'react';
import style from './Main.module.css';
import Pagination from './Pagination/Pagination';
import Cards from './Cards/Cards';

function Main() {
  return (
    <div className={style.container}>
      <Pagination />
      <Cards />
    </div>
  )
}

export default Main;