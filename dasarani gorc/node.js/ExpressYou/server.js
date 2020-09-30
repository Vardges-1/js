// var fs = require('fs');
// const  http = require('http')

// const server = http.createServer((request, response) => {
//     const url = request.url
//     console.log("URL Stranici " + request.url);
//     response.setHeader('Content-Type', 'text/html; charset=utf-8')

//     if(url === '/fbw9'){
//         fs.createReadStream(__dirname + '/fbw9.html').pipe(response)
//     }else if(url === '/gago.png'){
//         response.setHeader('Content-Type', 'image/png')
//         fs.createReadStream(__dirname + '/gago.png').pipe(response)

//     }else if(url === "/about" || url == "/"){
//         fs.createReadStream(__dirname + '/about.html').pipe(response)
      
//     }else{
//      response.statusCode = 404
//         response.end(`Es gibt keine${url}, <a href="/">Startseie</a>`)
//     }
// })

// server.listen(3000,(err) => {
//     if(err){
//         return console.log('fehler', err)
//     }
//     console.log('Server running at port 3000')
// })