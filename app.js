require('./models/user.model');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();

//middleware

app.use(bodyParser.json());
app.use(cors());

//Listen to server
app.listen('3000', ()=> console.log('server started at Port:${process.env.PORT}'));

//DB Local Connection
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/attDemo", (err)=> {
    if(!err){
        console.log("MongoDB connection Success");
    } else {
        console.log("Error in MongoDB connection: "+JSON.stringify(err, undefined, 2));
    }
});
