const defaultState = {
  name: 'yz',
  weather: 'cool'
}

export default (state=defaultState, action) => {
  switch(action.type) {
    case 'updateWeather':
      return {
        ...state,
        weather: action.payload
      }
    default:
      return state
  }
}