const mongoose = require('mongoose');
const uri = "mongodb+srv://raymondjay:iamlegendary11@cluster0.h2o1d.mongodb.net/dbParkingSystem?retryWrites=true&w=majority";
// const uri = "mongodb+srv://dbParkingSystem:@cluster0.g9l7uwl.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri, (err, db) => {
    console.log('Connected to database successfully!');
})