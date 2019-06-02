import React from 'react'
import { StaticRouter } from 'react-router-dom'
import ReactDOMSSR from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Routes from './Routes'

const reducer = (state = { name: 'wgs' }, action) => {
  return state
}
const store = createStore(reducer, applyMiddleware(thunk))

const render = req => {
  const App = () => {
    return (
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          <Routes />
        </StaticRouter>
      </Provider>
    )
  }
  const content = ReactDOMSSR.renderToString(<App />)
  return content
}

export { render }
