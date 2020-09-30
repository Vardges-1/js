// var fs = require('fs');

// // kartumenq mer danin creatReadStreamov u mechnel nshumenq vonc hasnel et daniin
// // createReadStream uje zapisan obrobotchik sobitii
// var myReadShort = fs.createReadStream(__dirname + '/article.txt', "utf8");
// var myWreiteShort = fs.createWriteStream(__dirname + '/news.txt');

// // zdes mi upatreblyaem sobitiye 'data'  ,data budet srabativat kogda mi budem poluchat danniye iz article.txt
// myReadShort.on('data', function(chunk){
//     console.log("Novie dannie polucheni:----------------" )
// // console.log(chunk)
// myWreiteShort.write(chunk)
// })


//////////////-------------------------

var fs = require('fs');

var myReadShort = fs.createReadStream(__dirname + '/article.txt', "utf8");
let chunkNum = ""
let book = ""

myReadShort.on('data', function(chunk){
    chunkNum++
    book += chunk
    console.log("Novie dannie polucheni:----------------"+ chunkNum )

})


myReadShort.on('end', () => {
    console.log('loading complete');
    console.log('number of Chuk Noris', chunkNum
    )
})






