import React from 'react';
import style from './Cards.module.css';
import Card from '../Card/Card';

function Cards({ countries }) {
  return (
    <div className={style.container}>
      {countries.map(el => 
        <div className={style.card_container}>
          <Card 
            id = {el.id}
            flag = {el.flag}
            name = {el.name}
            continent = {el.continent}
            population = {el.population}
          />  
        </div>
      )}
    </div>
  )
}

export default Cards;