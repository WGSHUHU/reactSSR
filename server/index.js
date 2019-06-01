import express from 'express'
import fs from 'fs'
import React from 'react'
import ReactDOMSSR from 'react-dom/server'
import Home from '../src/Home'

const app = express()
const content = ReactDOMSSR.renderToString(<Home />)
let template = fs.readFileSync('index.html', 'utf8')

app.use(express.static('public'))

app.get('/', (req, res) => {
  template = template.replace('{{{body}}}', content)
  res.send(template)
})

app.listen(3000, () => {
  console.log('server is listen 3000')
})
