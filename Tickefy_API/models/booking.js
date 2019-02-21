const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let bookingSchema = new Schema({
    event: Object,
    code: String,
    used: { type: Boolean, default: false }
})

let Booking = mongoose.model('booking', bookingSchema);

module.exports = Booking;