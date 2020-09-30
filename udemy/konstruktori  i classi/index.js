// // eto nayzivayeca funcia kontrutor takiye functi nujni dlya kontruirovaniye objektov i dlya sozdanii mnogo copy
// // dlya etoy funcion return ne nujen
// // stex karxenq baci svoystvaneric methodel grenq
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function (name) {
//         console.log("Hello" + this.name);
//     }
// };

// User.prototype.exit = function (name) {
//     console.log("User " + this.name + " ist gegangen")
// }


// // v etix peremenix sichas objekti, koga mi vizvali user i dali v nem orgumenti to ona stala funnctia konstruktorom
// let ivan = new User("Ivan", 12),
//     alex = new User("Alex", 22);


// console.log(ivan);
// console.log(alex);


// -----------------------------------------------eto to je sami no v Es6 formate

class User{
constructor(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}

hello() {
    console.log(`Hello"  ${this.name}`);
}
exit() {
    console.log(`User   ${this.name}   ist gegangen`)
}

}

let ivan = new User("Ivan", 12),
    alex = new User("Alex", 22);


console.log(ivan);
console.log(alex);