import React from 'react'
import { StaticRouter } from 'react-router-dom'
import ReactDOMSSR from 'react-dom/server'
import Routes from './Routes'

const render = req => {
  const App = () => {
    return (
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    )
  }
  const content = ReactDOMSSR.renderToString(<App />)
  return content
}

export { render }
