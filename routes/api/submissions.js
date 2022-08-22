const express = require('express');
const router = express.Router();
const Guess = require('../../models/Guess')

router.get('/', async(req, res) => {
    try {
        const allguesses = await Guess.find({}, {_id:0});
        res.send(allguesses)
    } catch(err) {
        console.error(err.message)
        res.status(500).send("Server is Butt")
    }
}
);

module.exports = router;