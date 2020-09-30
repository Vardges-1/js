//- number make string
// const age = 22 + ""
// console.log(age)
// console.log(typeof age)


//- Fill Arrays
// const users = Array(5).fill(5);
// console.log(users)


//- Uniqe Arrays jnjuma krknvox Arrayner@
// const users = [
//     "Ed",
//     "Meks",
//     "Erkus",
//     "Ereq",
//     "Chors",
//     "Hing",
//     "Ereq"
// ];
// const unique = Array.from(new Set(users))
// console.log(unique)



//- Slicing Arrays
// const users = [1,2,3,4,5,6,7,8];
// users.length = 3;
// console.log(users)



//- Slicing Arrays End
// const users = [1,2,3,4,5,6,7,8];
// console.log(users.slice(-1))


//- Array to Object
// const users = [1,2,3,4,5,6,7]
// const usersObject = {...users}
// console.log(usersObject)


// -Object to Arrays
// const users = {
//     name: "Edd",
//     vorname: "Edi",
//     nachname: "Eduard"
// }
// // const userArray = Object.keys(users)
// const userArray = Object.values(users)
// console.log(userArray)


// - Performance 
// let startAt = performance.now();

// for(var i = 0; i < 12222; i++){
//     console.log(i)
// }

// let endAt = performance.now();
// console.log(`${endAt - startAt} took millisecends to exouigew`)