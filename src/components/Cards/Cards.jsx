import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'

function Cards() {

  const { countries , loader, searchCountries } = useSelector(state => state)

  return (
    <div style={{display:'flex', flexWrap:'wrap'}}>
      {
        loader ? <p>cargando...</p> : 
        (searchCountries.countries && searchCountries.countries.length === 0) || countries.countries && countries.countries.length === 0 ? <span>No se encontraron resultados...</span> :
        searchCountries.countries ? 
        searchCountries.countries.map((el, i) => (
          <Card key={i} coat={el.coats_of_arms} flag={el.flag} code={el.id} name={el.name} continent={el.continent} lang={el.languages} />
        )) :
        countries.countries && countries.countries.map((el, i) => (
          <Card key={i} coat={el.coats_of_arms} flag={el.flag} code={el.id} name={el.name} continent={el.continent} lang={el.languages} />
        ))
      }
    </div>
  )
}

export default Cards