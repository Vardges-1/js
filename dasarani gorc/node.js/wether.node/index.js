const axios = require('axios')
const url = require('url')
const https = require('https')
const api_base_url = 'https://api.openweathermap.org/data/2.5/'
const api_endpoint = "weather"
const api_city = process.argv.slice(2)
const apis = 'ade79ed4680e5380ae246ec856c4afd1'
const request_url = url.resolve(api_base_url, api_endpoint) + `?q=${api_city}` + `&appid=${apis}`



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

    var sunriso = sunrise;
    var dato = new Date();
    dato.setTime(sunriso);
    var sunrise_date = dato.getHours() + ":" + dato.getMinutes() + ":" + dato.getSeconds();

    const {
        timezone,
        cod
    } = date;
    console.log(sunset_date , sunrise_date)
    console.log( timezone, cod)
}

getStarWarsPeople()