import React from 'react';
import style from './Filters.module.css';
import SearchBar from './SearchBar/SearchBar';
import { connect } from 'react-redux';
import { filterContinent } from '../../redux/actions';

function Filters({ filterContinent }) {

  function handleChange(e) {
    filterContinent(e.target.value)
  }

  return (
    <div className={style.container}>
      <div className={style.searchContainer}>
        <SearchBar />
      </div>
      <div className={style.filter}>
        <label htmlFor='all'>
          <input type='radio' id='all' name='continents' value='' onChange={e => handleChange(e)} defaultChecked/>All
        </label>
        <label htmlFor='africa'>
          <input type='radio' id='africa' name='continents' value='Africa' onChange={e => handleChange(e)}/>Africa
        </label>
        <label htmlFor='americas'>
          <input type='radio' id='americas' name='continents' value='Americas' onChange={e => handleChange(e)}/>Americas
        </label>
        <label htmlFor='asia'>
          <input type='radio' id='asia' name='continents' value='Asia' onChange={e => handleChange(e)}/>Asia
        </label>
        <label htmlFor='europe'>
          <input type='radio' id='europe' name='continents' value='Europe' onChange={e => handleChange(e)}/>Europe
        </label>
        <label htmlFor='oceania'>
          <input type='radio' id='oceania' name='continents' value='Oceania' onChange={e => handleChange(e)}/>Oceania
        </label>
        <label htmlFor='polar'>
          <input type='radio' id='polar' name='continents' value='Polar' onChange={e => handleChange(e)}/>Other
        </label>
      </div>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    filterContinent: el => dispatch(filterContinent(el))
  }
}

export default connect(null, mapDispatchToProps)(Filters);