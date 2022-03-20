import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Detail from './pages/Detail/Detail'
import Main from './pages/Main/Main'
import { getCountries, loader, setCurrencies, setLanguages } from './redux/actions'

function App() {

  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)

  useEffect(async() => { // eslint-disable-line
    dispatch(loader(true))
    await dispatch(getCountries()) 
    if(!countries.countries) { 
      await dispatch(setCurrencies())
      await dispatch(setLanguages())
    }
    dispatch(loader(false))
  }, [])  

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:id' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
