var mongoose = require('mongoose')

// Daten-Schema für users
var usersSchema = new mongoose.Schema({
    name: String,
    lastVisit: String
})

// Dokument-Vorlage für users
var usersModel = mongoose.model('User', usersSchema)

module.exports = usersModel