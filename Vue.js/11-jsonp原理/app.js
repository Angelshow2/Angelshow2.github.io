var http = require('http')
// 这个核心模块可以帮我们解析 URL 地址，从而拿到 pathname query
var urlModule = require('url')

var server =  http.createServer()

server.on('request', function (req, res) {
  
 
  var obj = urlModule.parse(req.url, true)
  // res.end(obj.query.callback() + '()')
  var dataStr = obj.query.callback
  console.log(req.url)
  if(obj.url === '/getdata'){
    console.log('111')
    
    res.end(dataStr)
  }else{
    console.log('171')
    res.end('404')
  }


})

server.listen(3000, function () {
  console.log('Running...')
})




