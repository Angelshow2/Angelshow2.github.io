function say(){
    console.log('hello world')
}

say()

// ;(function () {
//     console.log('hello')
// })()


// ;['苹果','香蕉'].forEach(function (item) {
//     console.log(item)
// });



//  `  是es6中新增的一种字符串包裹方式，叫做：模板字符串
//  它支持换行和非常方便拼接变量
// var foo = `
// 大家好
// hello       床前明月光
// world
// 哈哈哈`
// console.log(foo)

;`hello`.toString()

//当你采用了无分号风格的时候，只需要注意以下情况就不会有上面的问题了：
//    当一行代码是以：
//       （
//        [
//        `
//        开头的时候，则在前面补上一个分号可以避免语法解析错误
//     所以你会发现在一些第三方的代码中能看到一上来就以一个 ; 开头
//     