const fs = require('fs')

const searchTerm = 'function'
const reader = fs.createReadStream('big.txt', 'utf8')
let chunkNum = 0
let wordCount = 0

reader.on('data', chunk => {
    chunkNum++
    console.log("NEW CHUNK " + chunkNum)
    const result = chunk.split(searchTerm).length -1
    wordCount += result
})

reader.on('end', () => {
    console.log('loading complete')
    console.log(searchTerm + 'wurde ' + wordCount + ' nal gefunden')
})


//////////////------------

// const fs = require('fs')

// const searchTerm = 'function'
// const reader = fs.createReadStream('big.txt', 'utf8')
// const loger = fs.createWriteStream('wordSearch.log')
// let chunkNum = 0
// let wordCount = 0

// reader.on('data', chunk => {
//     chunkNum++
//     const message = "NEW CHUNK " + chunkNum  
//     console.log(message)
//     loger.write(message + '\n')
//     const result = chunk.split(searchTerm).length -1
//     wordCount += result
// })

// reader.on('end', () => {
//     console.log('loading complete')
//     console.log(searchTerm + 'wurde ' + wordCount + ' nal gefunden')
// })