const mongoose = require('mongoose')
const RecordModel = require('./models/records')
const UserModel = require('./models/users')

const faker = require('faker')

;(async function(){
    await mongoose.connect("mongodb://localhost:27017/recordshop", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

    // records collection leeren
    RecordModel.deleteMany({})

    // Beispieldaten in collection einfügen
    const dataPromises = Array(10)
        .fill(null)
        .map(() => {
            const record = new RecordModel({
                title: faker.commerce.productName(),
                artist: `${faker.name.firstName()} ${faker.name.lastName()}` ,
                year: faker.random.number(),
                img: faker.image.people(),
                price: faker.commerce.price(),
            })
            return record.save()
        })

        const dataMata = Array(10)
        .fill(null)
        .map(() => {
            const user = new UserModel({
                title: faker.commerce.productName(),
                artist: `${faker.name.firstName()} ${faker.name.lastName()}` ,
                year: faker.random.number(),
                img: faker.image.people(),
            })
            return user.save()
        })

    try {
        await Promise.all(dataPromises)
        await Promise.all(dataMata)
        console.log('fake data in DB created')
    } catch (error) {
        console.log(error)
    }
    mongoose.connection.close()
})()