var fs = require('fs');

// podklyucheniye k lokalnmu serveru
const http = require('http');

const server = http.createServer(function(req, res){
    console.log("URL Stranici " + req.url);
    // stgumenq consolei mech grac req.url, yete mech@ sleshic heto lini index kam menak slesh uremn -
    // kmiacnenq mer index.html ej@ 
    if(req.url === '/index'  || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        // es function asuma vortexa et file vor petqa kartacvi u inch file, u pipe(res) -
        // asumenq petqa stex grvi u et (res) mer brauzerna uvortex menq ameninch grumenq 
        fs.createReadStream(__dirname + '/index.html').pipe(res)
    // stexcumenq about.html vor es dzevov iran silatca linenq mtnenq broseric et ej@
    // locale hosti koxq@ grenq /about et html sayt@ baci
    }else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        fs.createReadStream(__dirname + '/about.html').pipe(res)
    // sranovel stugumenq yete animast brauseri dania grvel orinak senc /df43fh38 u chka htnec html vochel json -
    // uremn beruma error 
    }else{
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'})
        fs.createReadStream(__dirname + '/404.html').pipe(res)
    }
   

});

server.listen(3000, '127.0.0.1');
console.log("Mi otslejivaem port 3000")
