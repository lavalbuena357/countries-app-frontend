import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCountryById } from '../../redux/actions'
import styles from './Card.module.css'

function Card(props) {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  async function goToDetail(id) {
    await dispatch(getCountryById(id))
    navigate(`/${id}`)
  }

  return (
    <div className={styles.container} onClick={() => goToDetail(props.code)}>
      <div className={styles.images}>
        {/* {props.coat.length > 0 && <img className={styles.coat} src={props.coat} alt="coat" />} */}
        <img className={styles.flag} src={props.flag} alt="coat" />
      </div>
      <div className={styles.info}>
        <h3>{props.code}</h3>
        <h2>{props.name}</h2>
        <h4>{props.continent}</h4>
        <div className={styles.language_ctn}>
          {
            props.lang.map((el, i) => (
              <span className={styles.language_item} key={i}>{el.name}</span>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Card