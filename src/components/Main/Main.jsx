import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCountries } from '../../redux/actions';
import style from './Main.module.css';
import Pagination from './Pagination/Pagination';
import Cards from './Cards/Cards';

function Main({ getCountries, countries }) {
  const [currentPage, setCurrentPage] = useState(1)

  const countriesPerPage = 12;

  useEffect(() => {
    getCountries()
  }, []) // eslint-disable-line

  // Get current countries
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className={style.container}>
      <Pagination 
        currentPage = {currentPage}
        countriesPerPage = {countriesPerPage}
        paginate = {paginate}
        countries = {countries}
      />
      <Cards currentCountries={currentCountries}/>
      <Pagination 
        currentPage = {currentPage}
        countriesPerPage = {countriesPerPage}
        paginate = {paginate}
        countries = {countries}
      />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    countries: state.countries
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCountries: () => dispatch(getCountries())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);