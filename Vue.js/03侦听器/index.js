var vm = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
        //如果question发生改变就会触发这个函数
        question: function () {
            this.answer = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }
    },
    created() {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
        getAnswer: function () {
            if(this.question.indexOf('?') === -1) {
                this.answer = 'Questions usually contain a question mark. :-)'
                return
            }
            this.answer = 'Thinking...'
            var vm = this
            axios.get('https://yesno.wtf/api')  //--- 接口
                .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function (err) {
                    vm.answer = 'Error!'+err
                })
        }
    },
})