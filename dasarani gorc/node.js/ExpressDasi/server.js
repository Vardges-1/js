const fs = require('fs')
const express = require('express')
const server = express()
const path = require("path")

const userData = {};

server.use(express.json())
server.use(express.urlencoded({extended:true}))

// server.use("/public", express.static("public"))
server.use("/public", express.static(path.join(__dirname, "public")))

server.get('/json', (req, res) => {
    res.set("Access-Control-Allow-Headers", "Content-Type"),
    res.set("Accept", "application/json"),
    res.set("auth-token", "xxxx"),
    res.set("Access-Control-Allow-Origin", "*"),
    res.set("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD"),
    res.send({message: "Ich bin Tanos"})
})


server.get("/", (req, res) => {
    res.send(`
    <form action="/form-data" method="POST">
    <input type="text" name="firstname"/>
    <input type="submit">Senden</input>
    
    </form>
    `)
})

server.post("/form-data", (req, res) => {
    userData.firstname = req.body.firstname
    res.send("Daten sind bei mir du Mensch " + userData.firstname)
})