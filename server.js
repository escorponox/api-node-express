// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
const express = require('express'),
  fs = require('fs'),
  app = express()

const jsonData = { count: 123, message: 'hey' }

app.get('/', (req, res) => {
  res.sendfile(__dirname + '/index.html', err => {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.get('/data', (req, res) => {
  res.json(jsonData)
})

const port = 3000
app.listen(port, () => console.log(`Listening on port ${port}`))
