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



// function sendFile(path, response) {
//     const fileReader = fs.createReadStream(path)
//     fileReader.on('error', err => {
//         response.statusCode = 404
//         response.end(`Die Datei ${path} wurde nicht gefunden, geh bitte auf <a href="/">Startseite</a>`)
//     })
    
//     fileReader.pipe(response)
// }

// const server = http.createServer((request, response) => {
//     const url = request.url
//     console.log(request.url)
//     response.setHeader("Content-Type", "text/html; charset=utf-8")
//     response.setHeader("Access-Control-Allow-Origin", "*")
//     response.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD")
//     if(url == '/') {
//         //sendFile('./index.html', response)
//         const myJSON = {
//             message: "Ich komme vom Backend, Yo"
//         }
//         response.end(JSON.stringify(myJSON))
//     } else if(url == '/fbw9') {
//         const myJSON = {
//             members: [{
//                 name: "Alex"
//             }, {
//                 name: "Fatima"
//             }, {
//                 name: "Ahmad Lojain"
//             }]
//         }
//         response.end(JSON.stringify(myJSON))
//     } else if(url.includes('/images/')) {
//         response.setHeader("Content-Type", "image/jpeg")
//         sendFile('./images/storm.jpg', response)
//     } else if(url == '/send-data') {
//         console.log('store data')
//         request.on('data', chunk => {
//             console.log('data', chunk)
//             fs.appendFile('dataStorage.txt', chunk)
//         })
//     }else {
//         response.statusCode = 404
//         response.end(`Unter ${url} gibt es keine Seite, geh bitte auf <a href="/">Startseite</a>`)
//     }
// })

// server.listen(3000, (err) => {
//     if(err) {
//         return console.log('fehler', err)
//     }
//     console.log('Server running at Port ' + 3000)
// })

server.listen(3000)