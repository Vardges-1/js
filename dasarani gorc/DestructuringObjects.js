
// var array = ['eins','zwei','drei','vier'];
// ​
// // => 'eins' 'drei' ['vier']
// ​
// var [a,,b,...c] = array
// ​
// console.log(a,b,c)
// ​
// ​
// ​
// ​
// ​
// var user = {
//     name:"anx",
//     alter:35,
//     hobbies:['famile','malen','parkour','coden']
// }
// ​
// // => hallo anx, hast du lust auf malen
// ​
// var {name,hobbies:[,hobby]} = user
// ​
// console.log(`hallo ${name}, hast du lust auf ${hobby}`)
// console.log("hallo " + name + ", hast du lust auf " + hobby)
// ​
// ​
// ​
// ​
// var user = {
//     name:"anx",
//     alter:35    
// }
// ​
// function greet({name,alter}){
//     console.log(`Hallo ${name} du bist ${alter} Jahre alt.... noch :D`)
// }
// ​
// ​
// ​
// ​
// ​
// ​
// var userList = [
// {
//     name:"anx",
//     alter:35
// },
// {
//     name:"fly",
//     alter:33
// }]
// ​
// var [{name:name1,alter:alter1},{name:name2,alter:alter2}] = userList
// ​
// console.log(`${name1} ist ${alter1}`)
// console.log(`${name2} ist ${alter2}`)
// ​
// // => anx ist 35
// // => fly ist 33


//////////////////////
// var record = {
//     name:"anx",
//     age:35,
//     email:"sebastian.glaser@digitalcareeerinstitute.org"
// }
// ​
// var friend = {
//     name:"fly",
//     age:33,
//     email:"sebastian.glaser@digitalcareeerinstitute.org"
// }
// ​
// function greetOldskool(o){
//     console.log(`Hi ${o.name}, you're ${o.age} years old.`)
// }
// ​
// function greet({age,name}){
//     console.log(`Hi ${name}, you're ${age} years old.`)
// }
// ​
// greetOldskool(record);
// greet(record);
// ​
// // yes you can rename vars
// function greetRenamed({name:ownerName},{name:friendName}){
//     console.log(`Hi ${ownerName}, you're friends with ${friendName}.`)
// }
// ​
// greetRenamed(record,friend);
// ​
// // you can also read nested vars
// record = {
//     name:"anx",
//     age:35,
//     email:"sebastian.glaser@digitalcareeerinstitute.org",
//     flags:{admin:true,hacker:true,nerd:true},
//     todo:['teach','eat','sleep','pray']
// }
// ​
// function greetNested(
//     {
//         age:a,
//         name:n,
//         flags:{admin:ad},
//         todo:[todo1,todo2,,undso]
//     }
//     ){
//     console.log(
//         `Hi ${n}, you're an ${a} years old ${ad?'admin':'user'}.
//          Let's ${todo1} and ${todo2}, ${undso}!
//         `)
// }

////////////////////////
// function getScores(){
//     return [3,4,5];
// }

// let scores = getScores()
// console.log(scores)
// let [low, mid, high] = getScores();
// console.log(low,mid, high);


// var yes= "yes";
// var no = "no";

// var erku = [no, yes];

// yes = erku[0];

// no = erku[1];

// console.log("Yes is", yes);
// console.log("No is", no);
////////////////////// Деструктивное присваивание объектов
// var person = {
//     firstname: "John",
//     lastname: "doe",
// };

// var {firstname: anun, lastname: azganun} = person;

// console.log(anun, azganun);


////////////////////////
// var person = {
//     firstname: "John",
//     lastname: "doe",
// };

// var {firstname: anun, lastname: azganun} = { firstname: "John",lastname: "doe",};

// console.log(anun, azganun);

///////////////////////////////////////////Destructuring assignment
// var person = {
//     firstname: "John",
//     lastname: "doe",
//     social: {
//         facebook: "johndoe",
//         twitter: "jdoe",
//         imna: {
//             mymeil: "neue",
//         }
//     }
// };

// var {firstname: anun, lastname: azganun, social:{ imna:{mymeil} } } = person;

// console.log(anun, azganun, mymeil);


// function post(url, {data:{firstname, lastname}, cache}){
//     console.log(firstname, lastname, cache);
// }
// var result = post("api/users", {data: person, cache: false});