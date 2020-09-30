// const https = require('https');

// https.get("https://swapi.co/api/people/", response => {


// let data = ""    
// resp.on('data', (chunk) => {
//         data += chunk;
//       });
    
//       // The whole response has been received. Print out the result.
//       resp.on('end', () => {
//           const swapiJson = JSON.parse(data)
//         console.log(swapiJson.results[0].name);
//       });  



// })









//////////////////////------------------MIT EXIOS




// const axios = require('axios');

// axios.get('https://swapi.co/api/people/')

// .then(response => response.data)
//   .then(data => {
//     console.log(data.results[0].name);
//   })
//   .catch(error => {
//     console.log(error);
//   });





//////-----------------
 

const axios = require('axios');
const https = require('https')

const key = '0550daefc2a138d04a8a2538d7db4a77d83471aed0808348310592c79f501b8c';


const server = http.createServer((request, response) =>{
    axios.get(`https://api.unsplash.com/photos/random?client_id=${key}`)
.then(response => response.data)
.then(data => {
    response.setHeader("Content-Type", "text/html; charset=utf-8")
    response.end(`<img src="${data.urls.regular}">`)
  })
})

server.listen(3000)


