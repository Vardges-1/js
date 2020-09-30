var express = require('express')
var router = express.Router()


var reparatur = [{
    name: "Otto von Bismarck",
    dob: "20.01.2020",
    ersatzt: "Batterie",
    purchases: [{
        date: "2018-06-02",
        product: "Jaguar"
    }]

}]

router.get('/', (req, res) => {
    res.json(reparatur[0].ersatzt)
})

router.get('/:ersatzt', (req, res) => {
    var rep = req.params.ersatzt
    var teil = reparatur[rep]
    res.json(teil)
})

module.exports = router