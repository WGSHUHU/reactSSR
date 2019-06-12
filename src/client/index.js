import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { getClientStore } from '../store'
import { renderRoutes } from 'react-router-config'
import Routes from '../Routes'

const App = () => {
  const store = getClientStore()
  return (
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
    </Provider>
  )
}

ReactDOM.hydrate(<App />, document.getElementById('app'))
