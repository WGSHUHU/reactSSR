import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import clientAxios from '../client/request'
import serverAxios from '../server/request'
import HomeReducer from '../components/Home/reducer'
import HeaderReducer from '../components/Header/reducer'

const reducer = combineReducers({
  home: HomeReducer,
  header: HeaderReducer
})

export const getStore = req => {
  return createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(serverAxios(req)))
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
