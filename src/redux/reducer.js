import { GET_COUNTRIES, SEARCH_COUNTRIES } from "./actions";

const initialState = {
  countries: [],
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
    default:
      return state;
  }
}

export default reducer;