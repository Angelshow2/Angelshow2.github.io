
// ES6 太高级，浏览器无法识别
// import *** from '***' 是 ES6 导入模块的方式
// const $ = require('jquery')
import $ from 'jquery'

// import 导入 css
import './css/index.css'
// 注意：webpack 默认只能打包 js 文件
// 如果要处理 非js文件 需要安装合适的第三方 loader 加载器
// 1. npm i style-loader css-loader -D
// 2. 打开 webpack 配置文件，新增 module 属性---是一个对象，在module对象身上，有个 rules 属性，是个数组，存放所有第三方文件的匹配和处理规则


// node_modules 可以省略
import 'bootstrap/dist/css/bootstrap.css'



// class 关键字，是ES6中提供的新语法，是用来实现 ES6 中面向对象编程的方式
class Person {
  // 使用 static 关键字 定义静态属性
  // 静态属性：就是可以直接通过 类名. 直接访问的属性
  // 实例属性：只能通过类的实例，来访问的属性，叫做实例属性
  static info = { name: 'zs', age: 20 }
}

// 访问 Person 类身上的 info 静态属性
console.log(Person.info)

// 在 webpack 中默认只能处理部分 ES6 的新语法，需要借助第三方 loader 转为低级语法
// 通过 Babel 可以解决
// 1. 在webpack中 可安装以下两套包，去安装 Babel 相关的loader功能


//   1.1--- npm i @babel/core @babel/preset-env @babel/runtime babel-loader -D

//   1.2--- npm i @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime -D


// 2. 在 webpack 配置文件 的module 下的 rules 中，添加
//    { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }    匹配规则
//    必须通过 exclude 将 node_modules 排除掉
// 3. 在项目根目录中新建一个 叫做 .babelrc 的Babel配置文件，属于 json 格式
//    json 语法规范：不能写注释，字符串加双引号
//  .babelrc 配置如下：
// 
      // {
      //   "preset": [],
      //   "plugins": []
      // }       























// Java c# 实现面向对象的方式完全一样了， class 是从后端中借鉴过来的，来实现面向对象
// var p1 = new Person()



// function Animal (name) {
//   this.name = name
// }
// Animal.info = 123

// var a1 = new Animal('小灰')

// 这是静态属性：
// console.log(Animal.info)
// 这是实例属性
// console.log(a1.name)







$(function () {
  $('li:odd').css('backgroundColor', 'skyblue')
  $('li:even').css('backgroundColor', function () {
    return '#' + '156468'
  })
})


// webpack 打包指令 
// npx webpack ./src/main.js -o ./dist/bundle.js --mode development

// entry 默认 ./src
// output   ./dist
//
// pack.json 中加入     "dev": "webpack --mode development",   开发模式
//                     "build": "webpack --mode production"    生产模式


// 1. webpack 能够处理 js 文件的相互依赖关系
// 2. webpack 能够处理 js 的兼容问题，把高级的，浏览器不能识别的语法，转为低级的浏览器能识别的语法


// 使用 webpack-dev-server 这个工具，来实现自动打包编译的功能
// 1. 运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
// 2. 安装完毕后，这个 工具的用法和 webpack 命令的用法完全一样
// 3. 由于我们是在项目中，本地安装的 webpack-dev-server ，所以无法把它当作脚本命令，在终端中直接运行；（只有那些 安装到全局的 -g 工具，才可以）
// 4. 注意：webpack-dev-server 要求在本地安装 webpack
// 5. webpack-dev-server 帮我们打包的 bundle.js ，并没有存放在 实际的 物理磁盘上，；而是直接托管到了 电脑的内存中，所以项目根目录中无法找到

// --open             自动打开
// --port 3000        指定端口
// --contentBase src  默认打开 src
// --hot    部分更新，补丁          
//  热更新        网页不刷新重载（样式）



