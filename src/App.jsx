import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './pages/Main/Main'
import { getCountries, setCurrencies, setLanguages } from './redux/actions'

function App() {

  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)

  useEffect(async() => { // eslint-disable-line
    await dispatch(getCountries()) 
    if(!countries.countries) { 
      await dispatch(setCurrencies())
      await dispatch(setLanguages())
    }
  }, [])  

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
