import { UPDATE_WEATHER } from "./constants";

const defaultState = {
  name: 'yz',
  weather: {city: '郑州', weather: 'fine'}
}

export default (state=defaultState, action) => {
  switch(action.type) {
    case UPDATE_WEATHER:
      return {
        ...state,
        weather: action.weather
      }
    default:
      return state
  }
}