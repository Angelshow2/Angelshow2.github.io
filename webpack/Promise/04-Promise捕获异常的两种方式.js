const fs = require('fs')


function getFileByPath (fPath) {
  return promise = new Promise(function (resolve, reject) {
    fs.readFile(fPath, 'utf-8', (err, data) => {
      if(err) return reject(err)
      resolve(data)
    })
  })
}


// 如果前面的 Promise 执行失败，我们不想让后续的操作终止，可以为每个promise指定 失败的回调

// getFileByPath('./files/1.txt')
// .then(function (data) {
//   console.log(data)

//   return getFileByPath('./files/2.txt')
// }, function (err) {
//   console.log(err.message)
//   // return 一个新的
//   return getFileByPath('./files/2.txt')
// })
// .then(function (data) {
//   console.log(data)

//   return getFileByPath('./files/3.txt')
// })
// .then(function (data) {
//   console.log(data)
// })


getFileByPath('./files/1.txt')
.then(function (data) {
  console.log(data)

  return getFileByPath('./files/22.txt')
})
.then(function (data) {
  console.log(data)

  return getFileByPath('./files/3.txt')
})
.then(function (data) {
  console.log(data)
})
.catch(function (err) {
  console.log(err.message)
})




// 当我们不希望前面的 Promise 执行失败后影响 后续执行，我们可以单独为每个 promise 指定失败的回调

// 如果后续的执行依赖前面的结果，前面的失败了，则后面就没有执行的意义,我们要实现一旦有报错，立即终止后续执行

