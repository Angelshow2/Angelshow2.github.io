const fs = require('fs')
const path = require('path')

// fs.readFile(path.join(__dirname, './files/1.txt'), 'utf-8', (err, dataStr) => {
//   if(err){
//     return err.message
//   }
//   console.log(dataStr)
// })


// 我们可以规定一下， callback 中，有两个参数，第一个参数是 失败的结果，第二个参数是 成功的结果
// 同时， 我们规定了： 如果成功后，返回的结果，应该位于 callback 参数的第二个位置，此时，第一个位置由于没有出错，所以放一个 null ；如果失败了，则第一个位置放 error 对象，第二个位置放一个 undefined
function getFileByPath(fpath, callback) {
  fs.readFile(fpath, 'utf-8', (err, dataStr) => {
    if (err) {
      return callback(err)
    }
    return callback(null, dataStr)
  })
}

getFileByPath(path.join(__dirname, './files/1.txt'), (err, data) => {
  if (err) {
    return console.log(err.message)
  }
  console.log(data)
  
  getFileByPath(path.join(__dirname, './files/2.txt'), (err, data) => {
    if (err) {
      return console.log(err.message)
    }
    console.log(data)
    
    getFileByPath(path.join(__dirname, './files/3.txt'), (err, data) => {
      if (err) {
        return console.log(err.message)
      }
      console.log(data)
    })
  
  })
  
  
})
// console.log(aaa)