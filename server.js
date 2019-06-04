const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/get') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end('{"name":"wgs"}')
  }
})

server.listen(8000, () => {
  console.log('server is listen 8000')
})
