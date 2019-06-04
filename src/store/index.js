import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import HomeReducer from '../components/Home/reducer'

const reducer = combineReducers({
  home: HomeReducer
})

const getStore = () => {
  return createStore(reducer, { name: 'li' }, applyMiddleware(thunk))
}

export default getStore
