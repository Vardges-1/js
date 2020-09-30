const express = require("express")
const app = express()
const mongoose = require("mongoose")
// inch stanumenq parsa anum json sax inch ka
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv/config");


app.use(cors());
// amen anqam inch zapros anumenq esi json() sax parse anum
app.use(bodyParser.json());

//Import Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute)


// routes
app.get("/", (req, res) => {
 res.send("mek erku")
})




// conect to DB

mongoose.connect(process.env.DB_CONNECTION, 
{ useNewUrlParser: true, useUnifiedTopology: true },
() => {
    console.log("Conected to Db")
})

// how to the start listening to the server
app.listen(3000)





// ---------------------------------------



//Midlewares  
// app.use(auth)

//ROUTES 
// app.get("/", (req,res) =>{
//     res.send("We are on Home");
// });
// app.get("/posts", (req,res) =>{
//     res.send("We are on Posts");
// });
// //How to we start listening to the server 
// app.listen(3000);