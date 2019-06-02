import express from 'express'
import fs from 'fs'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import ReactDOMSSR from 'react-dom/server'
import Routes from '../Routes'

const app = express()
let template = fs.readFileSync('index.html', 'utf8')

app.use(express.static('public'))

app.get('/', (req, res) => {
  const App = () => {
    return (
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    )
  }
  const content = ReactDOMSSR.renderToString(<App />)
  template = template.replace('{{{body}}}', content)
  res.send(template)
})

app.listen(3000, () => {
  console.log('server is listen 3000')
})
