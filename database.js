const directory = './posts/'
const fs = require('fs')


const newButton = document.querySelector('.load-posts')
newButton.addEventListener('click', () => {
  fs.readdir(directory, (err, files) => {
    files.forEach(file => {
      document.createElement('div')
      document.write(file)
    })
  })
})
// document.querySelector('.load-posts').addEventListener('click', )