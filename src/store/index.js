import { createStore, combineReducers } from 'redux'
import {reducer as home} from '../containers/home/store'

const reducers = combineReducers({
  home
})

export const getServeStore = () => {
  return createStore(reducers)
}

export const getClientStore = () => {
  return window.STORE || createStore(reducers)
}