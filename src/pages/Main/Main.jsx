import React from 'react'
import Cards from '../../components/Cards/Cards'
import Nav from '../../components/Nav/Nav'
import SearchBar from '../../components/SearchBar/SearchBar'

function Main() {
  return (
    <div>
      <SearchBar />
      <Nav />
      <Cards />
    </div>
  )
}

export default Main