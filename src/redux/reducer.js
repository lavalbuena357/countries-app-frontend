import { normalize } from '../utils/normalize'
const initialState = {
  countries: {},
  searchCountries: {},
  activeFilters: {currency: '', language: '', continent: ''},
  currencies: [],
  languages: [],
  continents: [{'South America': "América del Sur"}, {'North America': "América del Norte"}, {Europe: "Europa"}, {Asia: "Asia"}, {Oceania: "Oceanía"}, {Africa: "África"}, {Antarctica: "Antártida"}],
  loader: true
}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case "COUNTRIES": 
      return {...state, countries: action.payload}
    case "SEARCH_COUNTRY":
      const search = state.countries.countries.filter(el => normalize(el.name).slice(0, action.payload.length) === (normalize(action.payload)))
      if(search.length < state.countries.countries.length) return {...state, searchCountries: {countries: search}}
      return {...state, searchCountries: {}}
    case "FILTERS":
      return {...state, countries: action.payload}
    case "SET_FILTER":
      return {...state, activeFilters: {...state.activeFilters, [action.payload.name]: action.payload.value}}
    case "SET_CURRENCIES":
      const singleObjects = []
      state.countries.countries.map(el => el.currencies.forEach(el => singleObjects[singleObjects.length] = {id: el.id, name: el.name}))
      let hash = []
      const filterCurr = singleObjects.filter(el => hash.includes(el.id) ? false : hash.push(el.id))
      return {...state, currencies: filterCurr}
    case "SET_LANGUAGES": 
      const singleLanguage = []
      state.countries.countries.map(el => el.languages.forEach(el => singleLanguage[singleLanguage.length] = {id: el.id, name: el.name}))
      let hashLang = []
      const filterLang = singleLanguage.filter(el => hashLang.includes(el.id) ? false : hashLang.push(el.id))
      return {...state, languages: filterLang}
    case "LOADER":
      return {...state, loader: action.payload}
    default:
      return state
  }
}