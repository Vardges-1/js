var events = require('events');

var myEmit = new events.EventEmitter();

myEmit.on("some__event", function(text){
    console.log(text);
});

myEmit.emit('some__event', 'Addeventlistener hat functioniert')



/////-------------


// var events = require('events');
// var util = require('util');

// var Cars = function(model){
//   this.model = model;
// }


// util.inherits(Cars, events.EventEmitter);

// var bmw = new Cars("Bmw");
// var volvo = new Cars("Volvo");
// var mers = new Cars("Mercedes");

// var car = [bmw, volvo, mers];

// car.forEach(function(car) {
//     car.on("speed", function(text){
//         console.log(car.model + " speed is - " + text)
//     })
// });

// bmw.emit("speed", "254.5 km");
// volvo.emit("speed", "254.5 km");
// mers.emit("speed", "254.5 km");




/////---------------------------------------------------