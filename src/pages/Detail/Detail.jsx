import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Detail.module.css'

function Detail() {

  const currentCountry = useSelector(state => state.currentCountry)

  return (
    <div className={styles.container}>
      <span>{currentCountry.id}</span>
    </div>
  )
}

export default Detail