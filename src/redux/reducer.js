const initialState = {
  countries: [],
  currentCountry: null
}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case "COUNTRIES": 
      return {...state, countries: action.payload}
    case "COUNTRY_BY_CODE":
      return {...state, currentCountry: action.payload}
    case "COUNTRIES_BY_CURRENCY":
      return {...state, countries: action.payload}
    case "COUNTRIES_BY_LANGUAGE":
      return {...state, countries: action.payload}
    case "COUNTRIES_BY_CONTINENT":
      return {...state, countries: action.payload}
    default:
      return state
  }
}