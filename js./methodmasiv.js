// let people = [
//     {name: "Vladimir", age: 25, budget: 40000},
//     {name: "Elena", age: 17, budget: 40000},
//     {name: "Igor", age: 19, budget: 40000},
//     {name: "Mikhail", age: 72, budget: 40000},
//     {name: "vasilisa", age: 35, budget: 40000},
//     {name: "Viktoria", age: 48, budget: 40000},
    
// ]

// zapis@ durs berenq
// for (let i = 0; i < people.length; i++){
//     console.log(people[i])
// }

// for (let person of people){
//    console.log(person)
// }

// forEach

// people.forEach(function(person){
//     console.log(person)
// })

// people.forEach(person => console.log(person))



///////Map 
// @ntrumes en inch uzumes u cuyces talis hetes berum reurni mijocovel karas

// let newPeople = people.map(person => {
//     return `${person.name} (${person.age})`
// })

// console.log(newPeople)



// let newPeople = people.map(person => person.age * 3)
// console.log(newPeople)



//////Filter anumes pahumes en inch petqa
// let adults = []

// for (let i = 0; i < people.length; i++){
//     if (people[i].age >= 18){
//         adults.push(people[i])
//     }
// }
// console.log(adults)


// esi aveli heshtna

// let adults = people.filter(person => {
//     if (person.age >= 18) {
//         return true
//     }
// })

// console.log(adults)


// aveli hesht dzev

// let adults = people.filter(person => person.age >= 18)
// console.log(adults)


///////Reduce 
// oqnuma stanal finalni operacian @ntanur gumara stanum ameninchic

// let amount = 0
// for (let i = 0; i < people.length; i++){
//     amount += people[i].budget
// }

// console.log(amount)

// aveli karch tarberakna

// let amount = people.reduce((total,person) => {
//        return total + person.budget
// }, 0 )

// console.log(amount)

// amena karch chanaparh@ stanalu

// let amount = people.reduce((total, person) => total + person.budget, 0)

// console.log(amount)


/////Find

// dlya poiska opredelyonix elementov

// let igor = people.find(person => person.name === "Igor")

// console.log(igor)


/////findindex nuyna inch Find 
// prosto na vixode poluchayem index

// let igor = people.findIndex(person => person.name === "Igor")

// console.log(igor)

////chto mojno delat sovmesto vsemi methodomi


// let amount = people
// .filter(person => person.budget > 3000)
// .map(person => {
//     return {
//         info: `${person.name} (${person.age})`,
//         budget: person.budget
//         }
// })
// .reduce((total, person) => total + person.budget, 0)


// console.log(amount)




/////////urish video 


// let number = [1, 10, 15, 20, -5, 8, 14];




//////method forEach

// for(let i = 0; i < number.length; i++){
//     console.log(number[i]);
    
// }

// let esho = number.forEach(item => console.log(item) )

/////METHOD filter

// let neg = [];

// for (let i = 0; i  < number.length; i++){
//     if(number[i] < 0){
//         neg.push(number[i]);

//     }
// }

// console.log(neg)


// let neg2 = number.filter(item =>{
//     return item < 0
// })

// console.log(neg2)
    
/////Method map

// let numbers = [];

// for (let i = 0; i < number.length; i++){
//     numbers.push(parseInt(number[i]));
// }
// console.log(numbers)


// let numbers2 = number.map(item => {
//     return parseInt(item)
// })

// console.log(numbers2)

// let allPos = true;

// for(let i = 0; i < number.length; i++){
//     if(number[i] < 0){
//         allPos = false;
//         break;
//     }
// }
// console.log(allPos)


// let allPos2 = number.some(item => {
//     return item <= 0;
// })

// console.log(allPos2)

// function moneyConverter(valNum){
//     document.getElementById("outputrub").innerHTML=valNum*60;
// }

