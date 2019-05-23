import Vue from 'vue'

import "bootstrap/dist/css/bootstrap.css";
import './css/app.css'
// 导入 mui 的样式表
import './lib/mui/css/mui.min.css'

// // 导入所有的 Mint-UI 组件
// import MintUI from 'mint-ui'
// // 这里可以省略 node_modules 
// import 'mint-ui/lib/style.css'
// // 将 Mint-UI 安装到 Vue 上
// Vue.use(MintUI)


// 按需导入 Mint-UI 组件
import { Button } from 'mint-ui'
// 使用 Vue.component 注册 按钮组件
// Vue.component('mybtn', Button)
Vue.component(Button.name, Button)


// 导入 app 组件
import app from './App.vue'




const vm = new Vue({
  el: '#app',
  render: c => c(app),
 
})





