import { homeWeather } from "../../../apis/home";
import {UPDATE_WEATHER} from "./constants"

export const getHomeWeather = (dispatch, getState) => {
  return homeWeather().then(res => {
    dispatch(updateHomeWeather(res.data.data))
  })
}

export const updateHomeWeather = (weather) => ({
  type: UPDATE_WEATHER,
  weather
})