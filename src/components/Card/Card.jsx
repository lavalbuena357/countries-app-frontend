import React from 'react'
import styles from './Card.module.css'

function Card(props) {
  return (
    <div className={styles.container}>
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