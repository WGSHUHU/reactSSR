import express from 'express'
import fs from 'fs'
import path from 'path'
import { render } from './utils'

const app = express()
let template = fs.readFileSync('index.html', 'utf8')

app.use(express.static('public'))

app.get('*', (req, res) => {
  if (req.url === '/favicon.ico') {
    res.send('123')
  } else {
    const content = render(req)
    template = template.replace('{{{body}}}', content)
    res.send(template)
  }
})

app.listen(3000, () => {
  console.log('server is listen 3000')
})
