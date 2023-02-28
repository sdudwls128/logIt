// const bodyParser = require('body-parser')
const http = require('http')
const fs = require('fs')
const url = require('url')
const qs = require('querystring')
const path = require('path')
const express = require('express')
const request = require('request')
// import { doc } from './main'

const app = express()
const port = 5500

app.use(express.static(__dirname))

//여기서 다해야댐
app.get('/', (req, res) => {
  homeUrl = __dirname + '/index.html'
  res.sendFile(homeUrl)

})

app.get('/load-posts', (req, res) => {
  const dir = __dirname + '/posts'
  let template = `
  <!doctype html>
  <html>
  <head>
    <title>load-posts></title>
    <meta charset="utf-8">
  </head>
  <body>
  <form action = "http://localhost:5500/load-posts/" method="post">
  <ul>
    <li>post1</li>
    <li>post2</li>
    <li>post3</li>
    <li>post4</li>
    <li>post5</li>
  </ul>
  </form>
  </body>`
  res.writeHead(200)
  res.end(template)

  // fs.readdir(dir, (err, files) => {
  //   files.forEach(file => {

  //   })
  // })
})



// const directory = __dirname + '/posts/'

// const newButton = doc.querySelector('.load-posts')
// // const newButton = document.querySelector('.load-posts')
// newButton.addEventListener('click', () => {
//   fs.readdir(directory, (err, files) => {
//     files.forEach(file => {
//       // doc.createElement('div')
//       // doc.write(file)
//       console.log(file)
//     })
//   })
// })


app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})
