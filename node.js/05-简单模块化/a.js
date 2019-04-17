//   require 是一个方法
//   他的作用就是用来加载模块的
//   在Node中，模块有三种：
//       具名的核心模块，如：fs，http
//       用户自己编写的文件模块
//       相对路径必须加 ./
//       可以省略后缀名
//   Node中没有全局作用域，只有模块作用域
//      （外部和内部都访问不到）
//   既然是模块作用域，那如何让模块之间进行通信
//   有时候我们加载文件模块的目的不是为了简单的执行里面的代码，
//   更重要的是为了使用里面的某个方法

var foo = 'aaa'

console.log('a start')

function add(x,y) {
    return x + y
}

require('./b')  //推荐不加后缀

console.log('a end')

console.log('foo的值是：' + foo)

