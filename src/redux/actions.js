import axios from 'axios';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES'

export function getCountries() {
  return (
    async function(dispatch) {
      try {
        const countries = await axios.get('http://countriesinfoapp.herokuapp.com/countries');
        dispatch({
          type: GET_COUNTRIES,
          payload: countries.data
        })
      } catch(err) {console.log(err)}
    }
  )
}

export function searchCountries(name){
  return async function(dispatch) {
    try {
      const countries = await axios.get(`http://countriesinfoapp.herokuapp.com/countries?name=${name}`);
      dispatch({
        type: SEARCH_COUNTRIES,
        payload: countries.data
      });
    } catch(err) {
      dispatch({
        type: SEARCH_COUNTRIES,
        payload: 'error'
    })
    }
  }
}