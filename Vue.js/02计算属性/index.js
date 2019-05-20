var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World!'
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        },
        now: function () {
            return Date.now()
        }
    }
}) 