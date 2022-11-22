const mongoose = require('mongoose');
const uri = "mongodb+srv://'HERE WILL BE YOUR EMAIL':' HERE WILL BE YOUR PASSWORD '@cluster0.h2o1d.mongodb.net/dbParkingSystem?retryWrites=true&w=majority";


mongoose.connect(uri, (err, db) => {
    console.log('Connected to database successfully!');
})