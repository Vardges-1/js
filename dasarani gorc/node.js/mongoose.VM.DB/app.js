// Express-Bibliothek importieren
var express = require('express');

var dbURI = "mongodb://localhost:27017/animalshelter"

// User-Model importieren
var usersModel = require('./models/user')

// Mongoose-Bibliothek importieren
var mongoose = require('mongoose');

(async function(){
    // Mit der Datenbank verbinden
    mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})

    mongoose.connection.on('error', console.error)

    mongoose.connection.on('open', () => {
        console.log('Datenbankverbindung hergestellt')
    })

    // Daten-Aufbau definieren (Schema)
    var animalSchema = new mongoose.Schema({
        name: String,
        type: String
    })

    // Dokument-Vorlage aus Schema (Model)
    var animalModel = mongoose.model('Animal', animalSchema)

    // Dokument in animals-Collection erstellen
    var newAnimal = new animalModel({name: 'Kitty', type: 'cat'})
    await newAnimal.save()

    // Dokument in users-Collection erstellen
    var newUser = new usersModel({name: 'Mark Muster', lastVisit: '2019-12-23'})
    await newUser.save()

    var allUsers = await usersModel.find()
    console.log(allUsers)
})()

// Animals-Router importieren
//var animalRouter = require('./routes/animals')

// Server erstellen
var app = express()

// Parsen des Body in POST aktivieren
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, x-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next()
})

//app.use('/animals', animalRouter)

/*app.use((req, res, next) => {
    const error = new Error('Etwas ist schief gelaufen')
    error.status = 400
    next(error)
})*/

app.use((err, req, res, next) => {
    res.send({
        error: {
            message: err.message
        }
    })
})

module.exports = app;