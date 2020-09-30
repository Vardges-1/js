var mongoose = require('mongoose')
var User = require('./models/user');

(async function(){
    mongoose.connect("mongodb://localhost:27017/animalshelter", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

    try {
        await User.deleteMany({})
        console.log('Alle user gelöscht')
    } catch (error) {
        console.log(error)
    }

    mongoose.connection.close();
})();