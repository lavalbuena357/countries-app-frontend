import axios from 'axios'

const url = process.env.REACT_APP_URI

//traer todos los paises
export function getCountries(page = 1, limit = 250) {
  return async function(dispatch) {
    try {
      const countries = await axios.get(`${url}/all?page=${page}&limit=${limit}`)
      dispatch({
        type: "COUNTRIES",
        payload: countries.data
      })
    } catch (error) { console.log(error)}
  }
}

//buscar pais por nombre
export function searchCountry(name) {
  return {
    type: "SEARCH_COUNTRY",
    payload: name
  }
}

//buscar pais por id
export async function getCountryById(id) {
  try {
    const country = await axios.get(`${url}/detail/${id}`)
    return country.data.country
  } catch (error) {console.log(error)}
}

//filtros
export function filterCountries(currency, language, continent, page = 1, limit = 250) {
  return async function(dispatch) {
    try {
      const filter = await axios.get(`${url}/all?currency=${currency}&lang=${language}&region=${continent}&page=${page}&limit=${limit}`)
      dispatch({
        type: "FILTERS",
        payload: filter.data
      })
    } catch (error) {console.log(error)}
  }
}

export function setFilter(name, value) {
  return {
    type: "SET_FILTER",
    payload: {name, value}
  }
}

//LLENAR DATOS
//obtener todas los tipos de moneda
export function setCurrencies() {
  return {
    type: "SET_CURRENCIES"
  }
}

//obtener todos los idiomas
export function setLanguages() {
  return {
    type: "SET_LANGUAGES"
  }
}

//loader 
export function loader(bool) {
  return {
    type: "LOADER",
    payload: bool
  }
}
