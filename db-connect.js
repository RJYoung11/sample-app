const mongoose = require('mongoose');
const uri = "mongodb+srv://'here will be your email':' here will be your password '@cluster0.h2o1d.mongodb.net/dbParkingSystem?retryWrites=true&w=majority";


mongoose.connect(uri, (err, db) => {
    console.log('Connected to database successfully!');
})