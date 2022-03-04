import axios from 'axios'

const url = process.env.REACT_APP_URI

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