import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'

export default () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
    </div>
  )
}
