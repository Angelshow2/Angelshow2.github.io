var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/itcast', { useNewUrlParser: true })

var Schema = mongoose.Schema

var studentSchema = new Schema({
    name: { 
        type: String,
        required: true
    },
    age: {
        type: Number,
    },  
    sex: {
        type: Number,
        enum: [0, 1],    //枚举
        default: 0
    },
    phone: {
        type: Number
    }
})

module.exports = mongoose.model('Student', studentSchema)