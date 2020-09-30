const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)