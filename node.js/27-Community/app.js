
var express = require('express')
var path = require('path')
var session = require('express-session')
var router = require('./router')
var bodyParser = require('body-parser')

var app = express()

app.use('/public/', express.static(path.join(__dirname, './public/')))  //-----拼接路径
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules')))

app.engine('html', require('express-art-template')) //-----配置express-art-template模板引擎

app.set('views', path.join(__dirname, './views')) //默认去 views 文件夹中去找，可以在这里修改

//配置解析表单 POST 请求体插件（一定要在挂载路由器之前 ）
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 在 Express 这个框架中，默认不支持 Session 和 Cookie
// 但是我们可以使用第三方中间件：express-session 来解决
// 1. npm install express-session
// 2. 配置（一定要在挂载路由之前）
// 3. 使用
//      当把这个插件配置好之后，我们就可以通过 req.session 来访问和设置 Session 成员
//      添加 session 数据：req.session.foo = 'bar'
//      访问 session 数据：req.session.foo

app.use(session({
    secret: 'keyboard cat', // ---配置加密字符串，它会在原有加密基础之上和这个字符串拼起来去加密  -----增加安全性
    resave: false,
    saveUninitialized: true // ---无论是否使用 session 存数据 ，我都默认直接给你分配一把钥匙
}))



//挂在路由器
app.use(router)

app.listen(8000, function () {
    console.log('Running...')
})
