import express from 'express'
import fs from 'fs'
import { render } from '../utils'

const app = express()
let template = fs.readFileSync('index.html', 'utf8')

app.use(express.static('public'))

app.get('*', (req, res) => {
  const content = render(req)
  template = template.replace('{{{body}}}', content)
  res.send(template)
})

app.listen(3000, () => {
  console.log('server is listen 3000')
})
