var express = require('express')
var app = express()

app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.get("/about", function(req, res){
    res.render("about")
})


app.get("/news/:id", function(req, res) {
    var obj ={
        title: "Novsti",
        kod: 212,
        paragrafs:["Irgendwas", "Nochwas", "Zahlen: 1, 2, 3, 4", 99]
    }
    res.render("news",  {newsId: req.params.id, obj: obj});
})




app.listen(3000);




/////-----------



// var express = require('express')
// var app = express()
 
// app.get("/", function(req, res){
//     res.send("This is home")
// })

// app.get("/news/:id", function(req, res) {
//     res.send("ID is - " + req.params.id)
// })




// app.listen(3000);