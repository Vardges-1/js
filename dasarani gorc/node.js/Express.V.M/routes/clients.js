var express = require('express')
var router = express.Router()

var clients = [{
    name: "Nick Noln",
    dob: "1970-12-12",
    purchases: [{
        date: "2018-06-02",
        product: "Tesla Model X"
    }]
},{
    name: "Boris Risow",
    dob: "1974-12-06",
    purchases: [{
        date: "2019-08-02",
        product: "Tesla Model S"
    }]
}]

router.get('/', (req, res) => {
    res.json(clients)
})

router.get('/:id', (req, res) => {
    var clientID = req.params.id
    var client = clients[clientID]
    res.json(client)
})

module.exports = router