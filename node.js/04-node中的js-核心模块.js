
//用来获取机器信息
var os = require('os')

//用来操作路径
var path = require('path')

// 获取当前机器cpu信息
console.log(os.cpus())

//获取当前机器的内存
console.log(os.totalmem())

//获取拓展名
console.log(path.extname('c:/a/b/c/d/hello.txt'))