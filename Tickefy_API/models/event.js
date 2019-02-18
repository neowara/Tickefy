const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let eventSchema = new Schema({      
    artist: String,
    when: {
        date: String,
        from: String,
        to: String
    },
    where: {
        venue: String,
        adress: String
    },
    info: String,
    price: Number,
    tickets: Number
})

let Event = mongoose.model('event', eventSchema);

module.exports = Event;