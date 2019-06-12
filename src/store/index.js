import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import clientAxios from '../client/request'
import serverAxios from '../server/request'
import HomeReducer from '../components/Home/reducer'

const reducer = combineReducers({
  home: HomeReducer
})

export const getStore = () => {
  return createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(serverAxios))
  )
}

export const getClientStore = () => {
  const defaultState = window.__ssr_data
  return createStore(
    reducer,
    defaultState,
    applyMiddleware(thunk.withExtraArgument(clientAxios))
  )
}
