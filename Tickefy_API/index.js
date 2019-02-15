const express = require('express');
const mongoose = require('mongoose');

//connect to our db
mongoose.connect(`mongodb+srv://captain:${process.env.PASSWORD}@cluster0-5hp9v.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true})
.then(() => {
    console.info('Connected to database');
})
.catch(err => {
    console.error(err.stack);
})

//routes
let tickets = require('./routes/tickets.js');
let verify = require('./routes/verify.js');

let app = express();
app.use(express.json());

app.route('/tickets')
.post(tickets.post)
.get(tickets.get)

app.route('/verify/:code')
.get(verify.get)


app.listen(3000, () => {
    console.info('Server is running on port: 3000');
})