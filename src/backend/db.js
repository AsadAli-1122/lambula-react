const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config()



const mongoURI = process.env.REACT_APP_MONGO_URI;

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;

