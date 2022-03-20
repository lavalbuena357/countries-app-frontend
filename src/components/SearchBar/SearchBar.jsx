import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchCountry } from '../../redux/actions'
import styles from './SearchBar.module.css'

function SearchBar() {

  const countries = useSelector(state => state.countries)
  const refInput = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
    countries.countries &&  dispatch(searchCountry(refInput.current.value))
  }, [countries])

  function handleChange() {
    dispatch(searchCountry(refInput.current.value))
  }

  return (
    <div className={styles.container}>
      <input ref={refInput} type="text" placeholder='Buscar paises...' onChange={handleChange} />
    </div>
  )
}

export default SearchBar