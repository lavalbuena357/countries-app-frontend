import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterCountries } from '../../redux/actions'
import Filter from '../Filter/Filter'

function Nav() {

  const dispatch = useDispatch()

  const { currencies, languages, continents, activeFilters } = useSelector(state => state)

  return (
    <div>
      <Filter 
        type='currency'
        action={async () => await dispatch(filterCountries(activeFilters.currency, activeFilters.language, activeFilters.continent, 1, 250))}
        text='Filtrar por moneda' 
        mapArr={currencies} 
        valuePred={el => el.id}
        optionsText={el => `${el.id} - ${el.name}`}
      />

      <Filter 
        type='language'
        action={async () => await dispatch(filterCountries(activeFilters.currency, activeFilters.language, activeFilters.continent, 1, 250))}
        text='Filtrar por idioma' 
        mapArr={languages} 
        valuePred={el => el.id}
        optionsText={el => el.name}
      />

      <Filter 
        type='continent'
        action={async () => await dispatch(filterCountries(activeFilters.currency, activeFilters.language, activeFilters.continent, 1, 250))}
        text='Filtrar por continente' 
        mapArr={continents} 
        valuePred={el => Object.keys(el)[0]}
        optionsText={el => Object.values(el)[0]}
      />
    </div>
  )
}

export default Nav