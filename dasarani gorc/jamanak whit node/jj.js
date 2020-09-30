const args = process.argv.slice(2);
const operation = args[0];
const numbers = args.slice(1);
const sum = require('./calc');

function avg(numArray) {
    return sum(numArray) / numArray.length
}

if(operation == "sum"){
    console.log(sum(numbers))
}else if(operation == "avg") {
    console.log(avg(numbers))
} else {
    console.log('I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)')
}


 module.exports = {sum, avg};
