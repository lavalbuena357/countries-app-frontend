import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';

function Card({ name, flag, continent, id, population }) {
  return (
    <div className={style.container}>
      <Link to={`detail/${id}`}>
        <div className={style.flag}>
          <img src={flag} alt="country flag" />
        </div>
        <h1>{name}</h1>
        <h3>{continent}</h3>
        <p>Population: {population}</p>
      </Link>
    </div>
  )
}

export default Card;