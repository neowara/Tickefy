let mongoose = require('mongoose');

let Schema = mongoose.Schema;


//create a Schema
let ticketSchema = new Schema({
    code: {
        type: [String, 'Code must be a string'],
        required: [true, 'No code found.']
    },
    name: {
        type: [String, 'Name must be a string'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    when: {
        date: {
            type: String,
            required: true
        },
        from: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        }
    }
});

//create a model based on that Schema
let Ticket = mongoose.model('ticket', ticketSchema);

module.exports = Ticket;