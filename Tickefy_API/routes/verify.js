let Ticket = require('../models/booking');

module.exports.get = async (req, res) => {

    try {

    let resp = await Ticket.find({ code: req.params.code});

    if(resp.length == 1){
        //Valid ticket 
        res.status(200).send('Ticket is valid.');

    } else {
        //Not valid
        res.status(400).send('Ticket is NOT valid, get a real one. You poser');
    }


    } catch (err) {
        res.status(500).send(err);
    }
} 