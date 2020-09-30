

const axios = require('axios')
const url = require('url')

const https = require('https')
const api_base_url = 'https://api.openweathermap.org/data/2.5/'
const api_endpoint = "weather"
const api_city = process.argv.slice(2)
const apis = 'ade79ed4680e5380ae246ec856c4afd1'
const request_url = url.resolve(api_base_url, api_endpoint) + `?q=${api_city}` + `&appid=${apis}`



// const server = https.createServer((request, response) => {
//     response.setHeader("Content-Type", "text/html; charset=utf-8")
//      const bekomen =  getStarWarsPeople(sunset_date)
//      response.end(`<ul><li>${bekomen}</li></ul>`)
// })











async function getStarWarsPeople() {
    const response = await axios.get(request_url)
    const date = await response.data
    const {
        sunrise,
        sunset
    } = date.sys;

    var sunseto = sunset;
    var dat = new Date();
    dat.setTime(sunseto);
    var sunset_date = dat.getHours() + ":" + dat.getMinutes() + ":" + dat.getSeconds();

// ---sunrise

    var sunriso = sunrise;
    var dato = new Date();
    dato.setTime(sunriso);
    var sunris_date = dato.getHours() + ":" + dato.getMinutes() + ":" + dato.getSeconds();

    const {
        timezone,
        cod
    } = date;
    console.log(sunset_date, sunris_date)
    console.log(timezone, cod)
    
}

getStarWarsPeople() 

// server.listen(3000,(err) => {
//     if(err){
//         return console.log('fehler', err)
//     }
//     console.log('Server running at port 3000')
// })