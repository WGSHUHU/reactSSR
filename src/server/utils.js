import React from 'react'
import { StaticRouter } from 'react-router-dom'
import ReactDOMSSR from 'react-dom/server'
import { Provider } from 'react-redux'
import getStore from '../store'
import Routes from '../Routes'

const render = req => {
  const store = getStore()
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
