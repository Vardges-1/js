// Express Bibliothek
var express = require('express');

//Pseudo-DB-Bibliothek importieren 
const { DataStore } = require('notarealdb');


// Pseudo-DB-Erstellen
const store = new DataStore('./data');

// Collection für die Tiere
const animl = store.collection('animl');

// Neues Tier hinzufügen
animl.create({type: "type", name: "anun"})

// Server erstellen
var app = express()

// Array mit allen Tieren
var animals = [
    {type: "Mann", name: "Du"},
    {type: "Mensch", name: "Auch du"}


]

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//URL feststellen
app.get('/', (req, res) => {
    res.send('<form method="POST" action="/animals"><input type="text" name="type"><input type="submit" value="Senden"></form>')
})

app.get("/animals", (req, res) => {
    res.json(animals)
})

app.post("/animals", (req, res) => {
   var data = req.body
   animals.push(data)
   res.json(animals)
})

app.delete("/animals/:animalId", (req, res) => {
    var animalId = req.params.animalId
    console.log(animalId)
    animals = animals.slice(animalId, animalId+2)
    res.json(animals)
   
})

app.put("/animals/:animalId", (req, res) => {
    var animalId = parseInt(req.params.animalId)
    animals[animalId] = req.body
    res.json(animals)
   
})
module.exports = app;
