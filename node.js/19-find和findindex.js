var users = [
    { id: 1, name: '张三' },
    { id: 2, name: '李四' },
    { id: 3, name: '王五' },
    { id: 4, name: '赵六' }
]

Array.prototype.myFind = function (fn) {
    for(var i = 0; i < this.length; i++){
        if(fn(this[i], i)){
            return this[i]     //----如果是 findIndex 就返回： i  得到的就是索引值
        }
    }

}

var ret = users.myFind(function (item, index) {   //传入一个条件函数---如果满足就返回 true ---》执行 if 语句 ，否则返回 false
    return item.id === 4
})

console.log(ret)