// Vue.component('todo-item',{
//     props: ['todo'],
//     template: '<li>{{ todo.text }}</li>'
// })

var obj = {
    foo: '123',
    seen: '111',
    url: 'aaa.html',
    
}
// Object.freeze(obj)

var app = new Vue({
    el: '#app',
    data: obj
})