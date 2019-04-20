var url = require('url')
var obj = url.parse('http://127.0.0.1:3000/pinglun?name=khjmjk&message=kkyiliu',true)

console.log(obj.query)