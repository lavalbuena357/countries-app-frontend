import React from 'react';
import style from './Main.module.css';
import Pagination from './Pagination/Pagination';

function Main() {
  return (
    <div className={style.container}>
      <Pagination />
    </div>
  )
}

export default Main;