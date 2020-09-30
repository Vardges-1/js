// callback function
// function first(){
//     setTimeout(function(){
//         console.log(1);
//     }, 500)
// }

// function second(){
//     console.log(2)
// }

// first();
// second();

// callback function
// function learnJS(lang, callback){
//     console.log("Ya uchu" + lang);
//     callback()
// }

// learnJS("JavaScript", function(){
//     console.log("Ya prohsol 3i urok!")
// })

// esel eli callback urish dzev

// function learnJS(lang, callback){
//     console.log("Es sovorumem " + lang)
//     callback();
// }

// function done(){
//     console.log("3 Lezuna")
// }

// learnJS("JavaScript", done);


// callback varkyan pahelu oqnutyamb


// function first(){
//     setTimeout(function(){
//         console.log(1)

//     },50);
// }

// function second(){
//     console.log(2);
// }

// first();
// second();


// normal callback

// function first(y){
//     console.log(1);
//     y();
// }

// function second(a,b){
//     console.log(a*b);
// }

// first(function(){
//     second(5,7);
//     // anonimel karanq anenq
//     console.log(100*4)
// })

////// Objekt stexcel

// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test",
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red",
// };

// delete options.bool;
// console.log(options);


// // nayumenq stugum mech@ inch ka saxov ancnumenq
// for(let key in options){
//    console.log("Unakutyun " + key + " imeet" + options[key])
// }

// // erkaurtyun@ objekti imanal
// console.log(Object.keys(options).length);

/////masivner arrays kanchelu dzever@
// let arr = [1, 2, 3, 4, 5];

// arr[99] = 99;
// console.log(arr);

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// console.log(arr)


////forEach

// let arr = ["first", 2, 3, "four", 5];

// arr.forEach((item, i, mass) => {
// console.log(i + ": " + item + "( massiv:" + mass +")");
// });

////Array poluchat daniye

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(",");
// console.log(arr);

////Array poluchit i otpravit na server odnoy strokoy

// let arr = ["wwww", "qqqqq", "dddd", "erere"],
//     ans = arr.join(", ");
// console.log(arr);

// Array sortirovat po alphabetu

// let arr = ["wwww", "qqqqq", "dddd", "erere"],
//     ans = arr.sort();
// console.log(arr);

///Array tver sortirovat

// let arr = [1, 15, 4],
//     ans = arr.sort(comparName);

// function comparName(a,b) {
//     return a-b;
// }
// console.log(arr);

