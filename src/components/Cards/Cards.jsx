import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'

function Cards() {

  const countries = useSelector(state => state.countries)

  return (
    <div>
      {
        countries.countries && countries.countries.map((el, i) => (
          <Card coat={el.coats_of_arms} flag={el.flag} code={el.id} name={el.name} continent={el.continent} lang={el.languages} />
        ))
      }
    </div>
  )
}

export default Cards