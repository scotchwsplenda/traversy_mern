const express = require('express');
const router = express.Router();
const {check, validationResult} = require("express-validator");

const Guess = require('../../models/Guess')

// @route POST api/guess
router.post(
//this is the address, defined more precisely in the server.js
'/',
// this is the validation stuff
[    check('guessername', 'Name is required').not().isEmpty() ],
// this is the actual saving data into the DB stuff
async (req, res) => {
const errors = validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});}    
const {guessername
    ,team
    ,date
    ,email
    ,Week1_oppscore
    ,Week2_oppscore
    ,Week3_oppscore
    ,Week4_oppscore
    ,Week5_oppscore
    ,Week6_oppscore
    ,Week7_oppscore
    ,Week8_oppscore
    ,Week9_oppscore
    ,Week10_oppscore
    ,Week11_oppscore
    ,Week12_oppscore
    ,Week13_oppscore
    ,Week14_oppscore
    ,Week15_oppscore
    ,Week16_oppscore
    ,Week17_oppscore
    ,Week18_oppscore
    ,Week1_teamscore
    ,Week2_teamscore
    ,Week3_teamscore
    ,Week4_teamscore
    ,Week5_teamscore
    ,Week6_teamscore
    ,Week7_teamscore
    ,Week8_teamscore
    ,Week9_teamscore
    ,Week10_teamscore
    ,Week11_teamscore
    ,Week12_teamscore
    ,Week13_teamscore
    ,Week14_teamscore
    ,Week15_teamscore
    ,Week16_teamscore
    ,Week17_teamscore
    ,Week18_teamscore
    } = req.body
guess = new Guess({
    guessername
    ,date
    ,team
    ,email
    ,Week1_oppscore 
    ,Week2_oppscore 
    ,Week3_oppscore 
    ,Week4_oppscore 
    ,Week5_oppscore 
    ,Week6_oppscore 
    ,Week7_oppscore 
    ,Week8_oppscore 
    ,Week9_oppscore 
    ,Week10_oppscore 
    ,Week11_oppscore 
    ,Week12_oppscore 
    ,Week13_oppscore 
    ,Week14_oppscore 
    ,Week15_oppscore 
    ,Week16_oppscore 
    ,Week17_oppscore 
    ,Week18_oppscore 
    ,Week1_teamscore 
    ,Week2_teamscore 
    ,Week3_teamscore 
    ,Week4_teamscore 
    ,Week5_teamscore 
    ,Week6_teamscore 
    ,Week7_teamscore 
    ,Week8_teamscore 
    ,Week9_teamscore 
    ,Week10_teamscore 
    ,Week11_teamscore 
    ,Week12_teamscore 
    ,Week13_teamscore 
    ,Week14_teamscore 
    ,Week15_teamscore 
    ,Week16_teamscore 
    ,Week17_teamscore 
    ,Week18_teamscore 
});

await guess.save();
console.log(guess)
res.send('succesfully added guess to the DB')}
)


module.exports = router;


