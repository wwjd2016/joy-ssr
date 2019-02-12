import { createStore, combineReducers, applyMiddleware } from 'redux'
import {reducer as home} from '../containers/home/store'
import thunk from 'redux-thunk';

const reducers = combineReducers({
  home
})

export const getStore = (preloadedState) => {
  return createStore(reducers, preloadedState, applyMiddleware(thunk))
}