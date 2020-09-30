var express = require('express')
var cars = require('../data/cars')
//neuer Express-Router
var carRouter = express.Router()
var carController = require('../controllers/cars')

carRouter.get('/', carController.cars)
//ROute für ein auto 
carRouter.get('/:id', carController.car)
carRouter.post('/new')

module.exports = carRouter