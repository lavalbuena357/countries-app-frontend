import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Detail.module.css'
import { Link, useParams } from 'react-router-dom'
import { getCountryById } from '../../redux/actions'

function Detail() {
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(async () => {
    await dispatch(getCountryById(id))
    setIsLoading(false)
  }, [])
  
  const country = useSelector(state => state.currentCountry)


  return (
    <div className={styles.container}>
      {
        isLoading ? <p>Cargando...</p> :
        <div>
          <div className={styles.panel_sup}>

          <div className={styles.flag_ctn}>
            <img src={country.flag} alt={`bandera de ${country.name}`} />
          </div>

          <div className={styles.coat_ctn}>
            <img src={country.coats_of_arms} alt={`escudo de ${country.name}`} />
            <h1>{country.official_name}</h1>
          </div>

          <div className={styles.map_ctn}>
            <h3>{country.continent}</h3>
            <a href={country.map} target='_blank'>Ver mapa</a>        
          </div>
          </div>

          <div className={styles.panel_inf}>
          <div className={styles.general_info_ctn}>
            <p className={styles.info_item}><span>Nombre: </span>{country.name}</p>
            <p className={styles.info_item}><span>Capital: </span>{country.capital}</p>
            <p className={styles.info_item}><span>Área: </span>{new Intl.NumberFormat().format(country.area)} km2</p>
            <p className={styles.info_item}><span>Población: </span>{new Intl.NumberFormat().format(country.population)} habitantes</p>
            <div className={styles.arr_ctn}>
              <span>Idiomas: </span>
              {country.languages.map((el, i) => (
                <div className={styles.arr_item} key={i}>
                  <span>{el.name}</span>
                </div>
              ))}
            </div>
            <div className={styles.arr_ctn}>
              <span>Moneda: </span>
              {country.currencies.map((el, i) => (
                <div className={styles.arr_item} key={i}>
                  <span>{el.id} - {el.name} - {el.symbol}</span>
                </div>
              ))}
            </div>
            <div className={styles.arr_ctn}>
              <span>Zona horaria: </span>
              {country.timezones.map((el, i) => (
                <div className={styles.arr_item} key={i}>
                  <span>{el}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.other_info_ctn}>
            <p className={styles.info_item}><span>Miembro ONU: </span>{country.un_member ? 'SI' : 'NO'}</p>
            <p className={styles.info_item}><span>País independiente: </span>{country.independent ? 'SI' : 'NO'}</p>
            <p className={styles.info_item}><span>Indicativo telefónico: </span>{country.callsign}</p>
            <div className={styles.arr_ctn}>
              <span>Sufijos: </span>
              {country.suffixes.map((el, i) => (
                <div className={styles.arr_item} key={i}>
                  <span>{el}</span>
                </div>
              ))}
            </div>
            <p className={styles.info_item}><span>Placas de vehículos: </span>{country.car_plate}</p>
            <p className={styles.info_item}><span>Carril de conducción: </span>{country.car_side === 'right' ? 'Derecho' : country.car_side === 'left' ? 'Izquierdo' : ''}</p>
            <div className={styles.arr_ctn}>
              <span>Dominios web: </span>
              {country.top_level_domain.map((el, i) => (
                <div className={styles.arr_item} key={i}>
                  <span>{el}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.borders_ctn}>
            <div className={styles.arr_ctn}>
                <span>Fronteras: </span>
                {country.borders.map((el, i) => (
                  <div className={styles.arr_item} key={i}>
                    <Link to='/'>{el}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Detail