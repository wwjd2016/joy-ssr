import { createStore, combineReducers } from 'redux'
import {reducer as home} from '../containers/home/store'

const reducers = combineReducers({
  home
})

export const getStore = (preloadedState) => {
  return createStore(reducers, preloadedState)
}