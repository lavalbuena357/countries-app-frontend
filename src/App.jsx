import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import { getCountries, setCurrencies } from './redux/actions'

function App() {

  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)

  useEffect(async() => { // eslint-disable-line
    await dispatch(getCountries()) 
    if(countries.length === 0) {
      await dispatch(setCurrencies())
    }
  }, [])

  

  return (
    <div>
      <Header />
      <Nav />
    </div>
  )
}

export default App
