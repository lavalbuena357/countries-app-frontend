import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCountries } from '../../redux/actions';
import style from './Main.module.css';
import Pagination from './Pagination/Pagination';
import Cards from './Cards/Cards';

function Main({ getCountries, countries, continent }) {
  const [currentPage, setCurrentPage] = useState(1)

  const countriesPerPage = 12;

  useEffect(() => {
    getCountries()
  }, []) // eslint-disable-line

  function filterCountries() {
    if(continent.length === 0) {
      return countries
    } else {
      let showCountries = countries.filter(el => el.continent === continent[0].continent)
      return showCountries;
    }
  }

  // Get current countries
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filterCountries().slice(indexOfFirstCountry, indexOfLastCountry);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className={style.container}>
      <Cards currentCountries={currentCountries}/>
      <Pagination 
        currentPage = {currentPage}
        countriesPerPage = {countriesPerPage}
        paginate = {paginate}
        countries = {filterCountries()}
      />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
    continent: state.continent
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCountries: () => dispatch(getCountries()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);