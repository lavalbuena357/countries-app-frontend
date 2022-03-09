const initialState = {
  countries: [],
  currentCountry: null,
  currencies: []
}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case "COUNTRIES": 
      return {...state, countries: action.payload}
    case "COUNTRY_BY_NAME":
      return {...state, countries: action.payload}
    case "COUNTRY_BY_CODE":
      return {...state, currentCountry: action.payload}
    case "COUNTRIES_BY_CURRENCY":
      return {...state, countries: action.payload}
    case "COUNTRIES_BY_LANGUAGE":
      return {...state, countries: action.payload}
    case "COUNTRIES_BY_CONTINENT":
      return {...state, countries: action.payload}
    case "SET_CURRENCIES":
      const allCurrencies = state.countries.map(el => el.currencies)
      const multipleObjects = allCurrencies.filter(el => el && Object.keys(el).length > 1)
      const singleObjects = allCurrencies.filter(el => el && Object.keys(el).length === 1)
      multipleObjects.forEach(el => {
        for (let item in el) {
          singleObjects[singleObjects.length] = {[item]:el[item]}
        }
      })
      let hash = {}
      const filterCurrencies = singleObjects.filter(el => {
        for (let item in el) {
          return hash[item] ? false : hash[item] = true
        }
      })
      return {...state, currencies: filterCurrencies}
    default:
      return state
  }
}