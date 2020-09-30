// etot method vernyot nam function
var express = require('express')

// mi vizivayaem express kak function i cherez peremennuyu app mi poluchayem vsye functioni-
// karotiye dostupni v biblioteke express naprimer mi mojem podklyuchitca k serveru razrobativat razlichnie danniye
var app = express()

app.get('/', function (req, res){
    res.send("Ba urish")
})

app.get('/news', function (req, res){
    res.send("Ba urish news")
})

app.get('/news/:id', function (req, res){
    res.send("ID is " + req.params.id)
})

app.listen(3000)