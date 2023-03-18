const mongoose = require('mongoose');
mongoose.set('strictQuery', false);


const mongoURI = "mongodb+srv://admin:admin@lambula.9txpanj.mongodb.net/test"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;

