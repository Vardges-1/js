const axios = require('axios')
const url = require('url')
const https = require('https')
// const api_base_url = 'https://od-api.oxforddictionaries.com/api/v2/'
// const api_endpoint = "weather"
// const hpi = process.argv.slice(2)
// const apis = '8b73348ba6f8d3dd6b6adaf55c3e4fae'
// const request_url = url.resolve(api_base_url, api_endpoint) + `?q=${hpi}` + `&appid=${apis}`
const app_id = "48410f5f"
const app_key = "8b73348ba6f8d3dd6b6adaf55c3e4fae"
const language = "en-gb"
const word = process.argv


async function getStarWarsPeople(word) {
    try {

        const request_url = "https://od-api.oxforddictionaries.com:443/api/v2/entries/" + language + "/" + word
        const response = await axios.get(request_url, {
            headers: {
                "app_id": `${app_id}`,
                "app_key": `${app_key}`
            }
        })
        const date = await response.data
        console.log(date.results[0].lexicalEntries[0].entries[0].senses[0].definitions)
        console.log(date.results[0].lexicalEntries[0].lexicalCategory.text)

    } catch (error) {
        console.log(error)
    }


}

getStarWarsPeople(word[2])