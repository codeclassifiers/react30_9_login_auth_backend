const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

// Import Routes
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
dotenv.config()
//Connect to DB
mongoose.connect(process.env.DB_CONNECT,(err)=>{
    if(err) {
        console.error(err);
    } else {
        console.log("Connected to DB");
    }
})

//Middleware
app.use(express.json())

//Route middleware 
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute)

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)