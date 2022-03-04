import axios from 'axios'

const url = process.env.REACT_APP_URI

export function getCountries() {
  return async function(dispatch) {
    const countries = await axios.get(`${url}/all`)
    dispatch({
      type: "COUNTRIES",
      payload: countries.data
    })
  }
}