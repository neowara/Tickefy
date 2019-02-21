// Tickets route for where its @ app

//models
let Booking = require('../models/booking');
let Event = require('../models/event');

module.exports.post = async (req, res) => {

    try {

        let event = await Event.findById(req.body.event);
        
        let bookings = [];

        for(i=0; i<req.body.amount; i++){

            let booking = {
                event: event,
                code: uid(5),
                used: false
            }

            bookings.push(booking);
            
            let updateEvents = await Event.findOneAndUpdate(
                { artist: event.artist},
                { $inc: { tickets: -1 } },
                { new: true, useFindAndModify: false }
            );
        }

        
        
        let resp = await Booking.create(bookings);
        console.log(resp);

        //Skicka tillbaka svar att allt gick fint + ticket-datan
        res.status(200).send(resp);
    
        // Sparar den i DB

    } catch(err) {
        console.error(err.stack);
        res.status(400).send(err.stack);
    }

};

// GET
module.exports.get = async (req, res) => {
    
    try {

        res.status(200).send( await Booking.find({}) );        
    
    } catch(err){
    
        res.status(500).send(err.stack);
    
    }
}

//this creates a random string of numbers with the given length (len)
function uid (len) {
    
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = [];

    for (let i=0; i<len; i++){
        let rand = Math.floor(Math.random() * chars.length);
        code.push(chars[rand]);
    }

    return code.join('');
}
