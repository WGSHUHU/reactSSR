import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import getStore from '../store'
import Routes from '../Routes'

const App = () => {
  const store = getStore()
  return (
    <Provider store={store}>
      <BrowserRouter>
        {Routes.map(item => {
          return <Route key={item.path} {...item} />
        })}
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.hydrate(<App />, document.getElementById('app'))
