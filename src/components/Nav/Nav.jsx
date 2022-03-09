import React from 'react'
import { useSelector } from 'react-redux'
import { filterCountriesByContinent, filterCountriesByCurrency, filterCountriesByLanguage } from '../../redux/actions'
import Filter from '../Filter/Filter'

function Nav() {

  const currencies = useSelector(state => state.currencies)
  const languages = useSelector(state => state.languages)
  const continents = useSelector(state => state.continents)

  return (
    <div>
      <Filter 
        action={filterCountriesByCurrency}
        text='Filtrar por moneda' 
        mapArr={currencies} 
        valuePred={el => Object.keys(el)[0]}
        optionsText={el => `${Object.keys(el)[0]} - ${Object.values(el)[0].name} - ${Object.values(el)[0].symbol}`}
      />

      <Filter 
        action={filterCountriesByLanguage}
        text='Filtrar por idioma' 
        mapArr={languages} 
        valuePred={el => Object.keys(el)[0]}
        optionsText={el => Object.values(el)[0]}
      />

      <Filter 
        action={filterCountriesByContinent}
        text='Filtrar por continente' 
        mapArr={continents} 
        valuePred={el => Object.keys(el)[0]}
        optionsText={el => Object.values(el)[0]}
      />
    </div>
  )
}

export default Nav