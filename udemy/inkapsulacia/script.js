function User(name, age) {
    this.name = name;
    // this.age = age;
    // grumenq let userAGei mech u polzavatel chi kara tesni u poxi tariq@ kamel en inch mechna
    let userAge = age;
    this.say = function () {
        console.log(`Imya polzavateela ${this.name}, vozsrast: &{this.age}`)
    }

    this.getAge = function () {
        return userAge;
    }

    this.setAge = function(age){
        if(typeof age === 'number' && age > 0 && age < 110){
            userAge = age
        }
    }

}

let ivan = new User('Ivan', 25);
console.log(ivan.name);
console.log(ivan.userAge);


ivan.userAge = 30;
ivan.name = "Alex";
console.log(ivan.name);
console.log(ivan.age);