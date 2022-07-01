// console.log('hello world')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>muhammad zaky </h1>')
})
app.get('/test', (req, res) => {
    res.send('test !')
  })
  app.get('/test/apa', (req, res) => {
    res.send('apa !')
  })
app.listen(port,func)
function  func() {
    console.log(`Example app listening on port ${port}`)
  }