var cars = require('../data/cars')

function carsController(req, res) {
    res.json(cars)
}

function carController(req, res) {
    var carId = req.params.id
    var car = cars[carId]
    res.json(car)
}

exports.cars = carsController
exports.car = carController