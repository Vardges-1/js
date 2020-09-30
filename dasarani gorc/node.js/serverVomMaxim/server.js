const http = require('http')
const fs = require('fs')

const port = 3001;

function sendFile(path, response) {
    const fileReader = fs.createReadStream(path)
    fileReader.on('error', err => {
        response.statusCode = 404
        response.end(`Die Datei ${path} wurde nicht gefunden, geh bitte auf <a href="/">Startseite</a>`)
    })

    fileReader.pipe(response)
}

const server = http.createServer((request, response) => {
    const url = request.url
    console.log(request.url)
    response.setHeader("Content-Type", "text/html; charset=utf-8")
    response.setHeader('Access-Control-Allow-Origin', '*')
    if (url == '/') {
        // sendFile('./index.html', response)
        const myJson = {
            message: "Ich komme vom Atlantida"
        }
        response.end(JSON.stringify(myJson))
    } else if (url == '/gago.png') {
        response.setHeader("Content-Type", "image/png")
        sendFile('./gago.png', response)

        // esi nra hamar vor papkov nkarner lini ,echic vercnenq mer uzac nkar@
        // } else if (url.includes('/images/')) {
        //         response.setHeader("Content-Type", "image/jpeg")
        //         sendFile('.', response)

        // } else if (url == '/fbw9') {
        sendFile('./fbw91.html', response)
    } else if (url == '/send-data') {
        request.on('data', chunk => {
            fs.appendFile('dataStorage.txt', chunk)
        })
    } else {
        response.statusCode = 404
        response.end(`Unter ${url} gibt es keine Seite, geh bitte auf <a href="/">Startseite</a>`)
    }
})

server.listen(port, (err) => {
    if (err) {
        return console.log('fehler', err)
    }
    console.log('Server running at Port 3000' + port)
})