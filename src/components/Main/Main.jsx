import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCountries } from '../../redux/actions';
import style from './Main.module.css';
import Pagination from './Pagination/Pagination';
import Cards from './Cards/Cards';

function Main({ getCountries, countries }) {

  useEffect(() => {
    getCountries()
  }, []) // eslint-disable-line

  return (
    <div className={style.container}>
      <Pagination />
      <Cards countries={countries}/>
      <Pagination />
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