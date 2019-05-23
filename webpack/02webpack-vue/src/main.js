// 如何在 webpack 构建项目中，使用 Vue 进行开发


// 在webpack中，使用 import Vue from 'vue' 导入的包不完整，只提供了 runtime-only 的方式
import Vue from 'vue'

// import Vue from '../node_modules/vue/dist/vue.js' //--- 第一种方式

// 回顾包的查找规则：
//   1. 找项目根目录有没有 node_modules
//   2. node_modules 找到对应 的 Vue 文件夹
//   3. 在 vue 文件夹中，找到 package.json 配置文件
//   4. 找到 main 属性 指定了这个包被加载时 的 入口文件

// 在package.json中修改main属性     ----第二种方式

// 在 webpack.config.js 中 配置

      // resolve: {
      //   alias: {
      //     "vue$": "vue/dist/vue.js"
      //   }
      // }
import login from './login.vue'
// 加载 .vue 文件
// npm i vue-loader vue-template-compiler -D
// 配置文件中，新增loader配置项， { test: /\.vue/, use: 'vue-loader' }
// 导入 const VueLoaderPlugin = require('vue-loader/lib/plugin') 插件
// 然后在插件节点 new VueLoaderPlugin()

// import m1,{ title as title123, container } from './test.js'
// console.log(m1)
// console.log(title123 + '--->' + container)



new Vue({
  el: '#app',
  data: {
    msg: '123'
  },
  // render: function (createElements) {
  //   return createElements(login)
  // }
  render: c => c(login) // 默认 return ---》ES6 简写
})


































