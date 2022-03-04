import axios from 'axios'

const url = process.env.REACT_APP_URI

//traer todos los paises
export function getCountries() {
  return async function(dispatch) {
    try {
      const countries = await axios.get(`${url}/all`)
      dispatch({
        type: "COUNTRIES",
        payload: countries.data
      })
    } catch (error) { console.log(error)}
  }
}

//buscar pais por codigo
export function getCountryByCode(code) {
  return async function(dispatch) {
    try {
      const country = await axios.get(`${url}/alpha/${code}`)
      dispatch({
        type: "COUNTRY_BY_CODE",
        payload: country.data
      })
    } catch (error) {console.log(error)}
  }
}

//filtrar paises por moneda
export function filterCountriesByCurrency(currency) {
  return async function(dispatch) {
    try {
      const countriesCurrency = await axios.get(`${url}/currency/${currency}`)
      dispatch({
        type: "COUNTRIES_BY_CURRENCY",
        payload: countriesCurrency.data
      })
    } catch (error) {console.log(error)}
  }
}

//filtrar paises por idioma
export function filterCountriesByLanguage(language) {
  return async function(dispatch) {
    try {
      const countriesLanguage = await axios.get(`${url}/lang/${language}`)
      dispatch({
        type: "COUNTRIES_BY_LANGUAGE",
        payload: countriesLanguage.data
      })
    } catch (error) {console.log(error)}
  }
}

//filtrar paises por continente
export function filterCountriesByContinent(continent) {
  return async function(dispatch) {
    try {
      const countriesContinent = await axios.get(`${url}/region/${continent}`)
      dispatch({
        type: "COUNTRIES_BY_CONTINENT",
        payload: countriesContinent.data
      })
    } catch (error) {console.log(error)}
  }
}

