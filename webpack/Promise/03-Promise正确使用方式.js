const fs = require('fs')


function getFileByPath (fPath) {
  return promise = new Promise(function (resolve, reject) {
    fs.readFile(fPath, 'utf-8', (err, data) => {
      if(err) return reject(err)
      resolve(data)
    })
  })
}

getFileByPath('./files/1.txt')
.then(function (data) {
  console.log(data)

  return getFileByPath('./files/2.txt')
})
.then(function (data) {
  console.log(data)

  return getFileByPath('./files/3.txt')
})
.then(function (data) {
  console.log(data)
})

