/**
 * 该文件用于封装该项目的API
 * 1.获取学生信息
 * 2.增加并保存信息
 * 3.修改信息
 * 4.删除信息
 */

var fs = require('fs')
var dbPath = './db.json'
//由于是异步操作，无法直接获取内部函数的值，所以要用到回调函数获取
//传入callback---调用时给callback传入值

//1.查找文件
exports.find = function (callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}

//读取单个学生信息---根据学生 id 来获取
// JOSN.stringify() ---将 对象，数组 转换成 字符串
// JSON.parse()     ---将 字符串 转换成 json对象

exports.findById = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        var ret = students.find(function (item) {
            return item.id === id
        })
        callback(null, ret)

    })
}

/**
 *  调用时：
 *   Student.findById(id, function (err, student) {
 * 
 *   })
 * 
 */


//2.添加并保存文件
exports.save = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students

        //学生的id
        student.id = students[students.length - 1].id + 1
        students.push(student)
        //JSON.stringify是将js中的对象或数组转换成JSON字符串
        var fillData = JSON.stringify({ 
            students: students
        })
        fs.writeFile(dbPath, fillData, function (err){
            if(err){
                return callback(err)
            }
            callback(null)
        })
    })
}

//3.修改信息----根据id修改信息
//    ①点击编辑转到 edit.html 页面
//    ②获取单个学生信息
//    ③修改并提交表单
//    ④转到 index.html
exports.updateById = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        
        // 注意：这里记得把 id 统一转换为数字类型
        student.id = parseInt(student.id)

        var stu = students.find(function (item) {
            return item.id === student.id
        })
        
        for(var key in student){
            stu[key] = student[key]
        }

        //JSON.stringify是将js中的对象或数组转换成JSON字符串
        var fillData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fillData, function (err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })

     
    })


    
}
/**
 * 调用时：
 *    Student.updataById(student, function (err){
 *    
 *    })
 * 
 * 
 */

/**
 * 4.删除信息
 *     ①读取所有信息
 *     ②根据id找到相应信息   
 *     ③删除该信息
 *     ④写入json文件
 */
exports.deleteById = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students

        var stu = students.findIndex(function (item) {
            return item.id === parseInt(id)
        })

        students.splice(stu, 1)
        

        //JSON.stringify是将js中的对象或数组转换成JSON字符串
        var fillData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fillData, function (err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })


    })
}

/**
 * 调用时：
 *     Student.delete(id, function (err) {
 *     
 *     })
 * 
 */