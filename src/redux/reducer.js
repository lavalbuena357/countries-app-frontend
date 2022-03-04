const initialState = {
  countries: []
}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case "COUNTRIES": 
      return {...state, countries: action.payload}
    default:
      return state
  }
}