var foo = 'bbb'

// console.log(exports)

exports.foo = 'hello'

exports.add = function (x,y) {
    return x + y
}

var age = 10
exports.age = age