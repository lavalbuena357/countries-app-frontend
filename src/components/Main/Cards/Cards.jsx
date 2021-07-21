import React from 'react';
import style from './Cards.module.css';
import Card from '../Card/Card';
import { connect } from 'react-redux';

function Cards({ currentCountries, error }) {
  return (
    <div className={style.container}>
      {error ? (<p>Country Not Found</p>) : (
        currentCountries.map((el, i) => 
        <div className={style.card_container} key={i}>
          <Card 
            id = {el.id}
            flag = {el.flag}
            name = {el.name}
            continent = {el.continent}
            population = {el.population}
          />  
        </div>
      ))}
    </div>
  )
}

function mapStateToProps(state) {
  return {
      error: state.error,
  };
};

export default connect(mapStateToProps)(Cards);