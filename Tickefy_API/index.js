const express = require('express');
const mongoose = require('mongoose');

//connect to our db
mongoose.connect(`mongodb+srv://captain:${process.env.PASSWORD}@cluster0-5hp9v.mongodb.net/Tickefy?retryWrites=true`, { useNewUrlParser: true})
.then(() => {
    console.info('Connected to database');
})
.catch(err => {
    console.error(err.stack);
})

//routes
let bookings = require('./routes/bookings.js');
let verify = require('./routes/verify.js');
let events = require('./routes/events.js');

let app = express();
app.use(express.json());

app.route('/bookings')
.post(bookings.post)
.get(bookings.get)

app.route('/verify/:code')
.get(verify.get)

app.route('/events')
.post(events.post)
.get(events.get)


app.listen(3000, () => {
    console.info('Server is running on port: 3000');
})