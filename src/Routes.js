import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'

export default () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
    </div>
  )
}
