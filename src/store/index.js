import { createStore, combineReducers, applyMiddleware } from 'redux'
import {reducer as home} from '../containers/home/store'
import thunk from 'redux-thunk';
import {clientInstance, serveInstance} from '../apis/request'

const reducers = combineReducers({
  home
})

export const getClientStore = (preloadedState) => {
  return createStore(reducers, preloadedState, applyMiddleware(thunk.withExtraArgument({request: clientInstance})))
}

export const getServeStore = () => {
  return createStore(reducers, applyMiddleware(thunk.withExtraArgument({request: serveInstance})))
}