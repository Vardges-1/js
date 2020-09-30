function sum(numArray) {
    return numArray.reduce((sum, num) => {
        const curNum = parseInt(num)
        if(isNaN(curNum)) {
            console.log(`Sorry, the argument "${num}" is not a number, please try again`)
            process.exit()
        }
        return sum + curNum
    }, 0)
}

module.exports = sum