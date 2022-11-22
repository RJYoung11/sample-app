const express = require('express');
const connect = require('./db-connect');
const app = express();
const api = require('./routes/api')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/api', api);

app.listen(3000, () => {
    console.log("Listening to port 3000")
})