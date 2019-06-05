import express from 'express'
import { render } from './utils'

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  if (req.url === '/favicon.ico') {
    res.send('123')
  } else {
    render(req, res)
  }
})
app.listen(3000, () => {
  console.log('server is listen 3000')
})
