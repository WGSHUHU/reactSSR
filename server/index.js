const express = require('express')
const fs = require('fs')
let template = fs.readFileSync('index.html', 'utf8')
const app = express()
app.get('/', (req, res) => {
  res.send(template)
})

app.listen(3000, () => {
  console.log('server is listen 3000')
})
