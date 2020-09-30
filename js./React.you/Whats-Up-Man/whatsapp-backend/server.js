//importing
const express = require("express");
const mongoose = require("mongoose");
const Messages = require('./dbMessages');
const Pusher = require('pusher');
const cors = require("cors")


//app config
const app = express()
const port = process.env.PORT || 9000


//Puscher
var pusher = new Pusher({
    appId: '1077390',
    key: 'd0d191147ca9aba3c78d',
    secret: '5c8a14c9ab2a9e88e82a',
    cluster: 'eu',
    encrypted: true
  });

//middleware
app.use(express.json())
app.use(cors())

// app.use((req,res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', '*');
//     next();
// })

const connecttion_url = "mongodb+srv://Amazona:123AAA@cluster0-ub3b4.mongodb.net/test?retryWrites=true&w=majority"


//DB config
mongoose.connect(connecttion_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const db = mongoose.connection;

db.once("open", () => {
    console.log("DB connected");

    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on("change", (change) => {
        console.log(change);

        if(change.operationType === "insert"){
            const messageDetails = change.fullDocument;
            pusher.trigger("messages", "inserted", {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            });
        }else{
            console.log("Error triggering Pusher");
        }
    })
});



//api routes
app.get('/', (req, res) => res.status(200).send("Lyava"));


app.get("/messages/sync", (req, res) => {
    Messages.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})



app.post("/messages/new", (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})




//listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));