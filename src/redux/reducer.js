import { GET_COUNTRIES, SEARCH_COUNTRIES, FILTER_CONTINENT, COUNTRY_DETAIL } from "./actions";

const initialState = {
  countries: [],
  continent: [],
  detail: null,
  error: false
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_COUNTRIES:
      return {...state,
        countries: action.payload
      };
    case SEARCH_COUNTRIES:
      if(action.payload === 'error') {
        return {...state,
          error: true
        }
    } else{
        return {...state,
          countries: action.payload,
          error: false
        }
    };
    case FILTER_CONTINENT:
      if(action.payload.length === state.countries.length) {
        return {...state,
          continent: []
        }
      }
      let filterContinent = state.countries.filter(el => el.continent === action.payload[0].continent)
      if(filterContinent.length > 0) {
        return {...state,
          continent: filterContinent
        }
      }
      return {...state, error: true}
      case COUNTRY_DETAIL:
        return {...state,
          detail: action.payload
        }
    default:
      return state;
  }
}

export default reducer;