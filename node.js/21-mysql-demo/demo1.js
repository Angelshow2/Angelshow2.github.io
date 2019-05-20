var mysql = require('mysql');

// 1.创建连接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '981055641',
    database: 'user' 
});

// 2.连接数据库
connection.connect();

// 3.执行数据操作

// ---查询
// connection.query('SELECT * FROM `users` ', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
// });

// ---增加
connection.query('INSERT INTO users VALUES("2", "zs", "88888")', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

// 4.关闭连接
connection.end();