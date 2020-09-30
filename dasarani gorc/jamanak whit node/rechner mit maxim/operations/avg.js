const sum = require('./sum')

function avg(numArray) {
    return sum(numArray) / numArray.length
}

module.exports = avg