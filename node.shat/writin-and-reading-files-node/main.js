// var fs = require("fs");

// var fileRead = fs.readFileSync('text.txt', "utf8");

// var mesaage = "Gut gemacht\n" + fileRead;
// fs.writeFileSync('erku.txt',  mesaage);



///////////-----------
var fs = require("fs");

fs.readFile('text.txt', 'utf8', function(err, data){
    console.log(data)
})


var erku = "fdfhgjhkjhkjh";
fs.writeFile('some.txt', erku, function(err, datan){
   
})

console.log("sfadfsd")