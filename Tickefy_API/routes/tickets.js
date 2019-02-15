// Tickets route for where its @ app

//models
let Ticket = require('../models/ticket');

module.exports.post = async (req, res, next) => {

    try {

        //hatera post 
        let ticket = req.body;

        //generar en CODE och sätter in nyckeln code: CODE
        ticket.code = uid(5);
        
        //skapar en instans av modellen Ticket
        let resp = await Ticket.create(ticket);
        console.log(resp);

        //Skicka tillbaka svar att allt gick fint + ticket-datan
        res.status(200).send(resp);
    
        // Sparar den i DB

    } catch(err) {
        console.error(err);
        res.status(400).send(err);
    }

};

// GET reqeuest
module.exports.get = async (req, res) => {

    try {

        let tickets = await Ticket.find({});

        res.status(200).send(tickets);

        } catch (err) {

        res.status(500).send(err);
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
