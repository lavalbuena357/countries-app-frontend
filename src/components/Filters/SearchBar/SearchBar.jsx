import React, { useState } from 'react';
import style from './SearchBar.module.css';
import { connect } from 'react-redux';
import { searchCountries } from '../../../redux/actions';

function SearchBar({ searchCountries }) {
  const [name, setName] = useState('')

  function handleChange(e) {
    setName(e.target.value)
    searchCountries(e.target.value)
}

  return (
    <div className={style.container}>
      <input
        className={style.search_bar}
        type = 'text'
        value = {name}
        placeholder = 'Search Countries...'
        onChange={(e) => handleChange(e)}
      />
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    searchCountries: el => dispatch(searchCountries(el))
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);