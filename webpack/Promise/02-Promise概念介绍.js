// 1. Promise 是一个构造函数，可以 new Promise() 得到一个实例对象
// 2. 有两个函数 resolve（成功之后的回调函数）和 reject（失败之后的回调函数） 
// 3. Promise 构造函数的 Prototype 属性上有一个 .then() 方法， 也就是说，只要是 Promise 的实例，就都可以访问 .then() 方法
// 4. Promise 表示一个异步操作，每当我们 new 一个实例时，这个实例就表示一个具体的异步操作
// 5. 这个 异步操作的结果只有两种状态
//   5.1 状态1： 成功  --->   resolve
//   5.2 状态2： 失败  --->   reject
//   5.3 只能用回调函数的方式 把结果 返回给调用者
// 6. 调用 .then() 方法，预先为这个异步操作，指定成功 和 失败 的回调函数 

const fs = require('fs')


function getFileByPath (fPath) {
  return promise = new Promise(function (resolve, reject) {
    fs.readFile(fPath, 'utf-8', (err, data) => {
      // if (err) throw err
      // console.log(data)
      
      if(err) return reject(err)
      resolve(data)
    
    })
  })
  // return promise
}

// 先执行 then 再执行 回调
getFileByPath('./files/1.txt')
.then(function (data) {
  console.log(data + '-----')
}, function (err) {
  console.log(err.message)
})

