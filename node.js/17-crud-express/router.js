/**
 * router.js 路由模块
 * 职责：
 *   处理路由
 *   根据不同的请求方法+请求路径设置具体的请求处理函数
 * 模块职责要单一，不要乱写
 * 我们划分模块的目的就是为了增强项目代码的可维护性
 * 提升开发效率
 */


var express = require('express')
var fs = require('fs')
var Student = require('./student')
// Express 提供了一种更好的方式
// 专门用来包装路由的
// 1. 创建一个路由容器
var router = express.Router()

router.get('/students', function (req, res) {
    Student.find(function (err, students){
        if(err){
            res.status(500).send('Server err!')
        }       
        res.render('index.html', { students: students })
    })
})

router.get('/students/new', function (req, res){
    res.render('new.html')
})

router.post('/students/new', function (req, res) {
    //1.获取表单数据
    //2.处理
    //    将数据保存到db.json 文件中用以持久化
    //3.发送响应
    //先读取出来，转成对象
    //让后往对象中push
    //然后再把对象转换成 字符串
    //然后把字符串再次写入文件
    Student.save(req.body,function (err) {
        if(err){
            return res.status(500).send('Server error!')
        }
        res.redirect('/students')
    })
})


//  req.query.id ---拿到的是 字符串 要转成数字
router.get('/students/edit', function (req, res) {
    Student.findById(parseInt(req.query.id), function (err,student) {
        if(err){
            return res.status(500).send('Server error!')
        }
        res.render('edit.html', { student: student })
    })



})

router.post('/students/edit', function (req, res) {
    Student.updateById(req.body, function (err) {
        if(err) {
            return res.status(500).send('Server error!')
        }
        res.redirect('/students')
    })
})

router.get('/students/delete', function (req, res) {
    Student.deleteById(req.query.id, function (err){
        if(err){
            return res.status(500).send('Server error!')
        }
        res.redirect('/students')
    })



})

module.exports = router