import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import styles from './Cards.module.css'

function Cards() {
  const [blocks, setBlocks] = useState(1)

  const { countries , loader, searchCountries } = useSelector(state => state)

  useEffect(() => {
    setBlocks(1)
  }, [countries])

  function more() {
    setBlocks(prev => prev+1)
  }

  return (
    <div className={styles.container}>
      {
        loader ? <p>cargando...</p> : 
        (searchCountries.countries && searchCountries.countries.length === 0) || countries.countries && countries.countries.length === 0 ? <span>No se encontraron resultados...</span> :
        searchCountries.countries ? 
        <div className={styles.cards_box}>
          <p className={styles.found}>{searchCountries.countries.length} {searchCountries.countries.length > 1 ? 'paises' : 'país'} encontrados</p>
          <div className={styles.cards_ctn}>
            {searchCountries.countries.slice(0, blocks*20).map((el, i) => (
            <Card key={i} coat={el.coats_of_arms} flag={el.flag} code={el.id} name={el.name} continent={el.continent} lang={el.languages} />
            ))}
          </div>
          <button onClick={more}>{(searchCountries.countries.length - (blocks*20) >= 0) ? `${searchCountries.countries.length - (blocks*20)} más...` : `0 Restantes` }</button>
        </div> 
        :
        <div className={styles.cards_box}>
          <p className={styles.found}>{countries.countries.length} paises encontrados</p>
          <div className={styles.cards_ctn}>
            {countries.countries.slice(0, blocks*20).map((el, i) => (
              <Card key={i} coat={el.coats_of_arms} flag={el.flag} code={el.id} name={el.name} continent={el.continent} lang={el.languages} />
            ))}
          </div>
          <button onClick={more}>{countries.countries && (countries.countries.length - (blocks*20) >= 0) ? `${countries.countries.length - (blocks*20)} más...` : `0 Restantes` }</button>
        </div>
        
        
      }
    </div>
  )
}

export default Cards