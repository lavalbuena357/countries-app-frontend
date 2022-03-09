import React from 'react'
import { useSelector } from 'react-redux'
import { filterCountriesByCurrency } from '../../redux/actions'
import Filter from '../Filter/Filter'

function Nav() {

  const currencies = useSelector(state => state.currencies)

  return (
    <div>
      <Filter 
        action={filterCountriesByCurrency}
        text='Filtrar por moneda' 
        mapArr={currencies} 
        valuePred={el => Object.keys(el)[0]}
        optionsText={el => `${Object.keys(el)[0]} - ${Object.values(el)[0].name} - ${Object.values(el)[0].symbol}`}
      />
    </div>
  )
}

export default Nav