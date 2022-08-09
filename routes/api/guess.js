const express = require('express');
const router = express.Router();
const {check, validationResult} = require("express-validator");

const Guess = require('../../models/Guess')


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
    ,date
    ,week1_oppscore
    ,week2_oppscore
    ,week3_oppscore
    ,week4_oppscore
    ,week5_oppscore
    ,week6_oppscore
    ,week7_oppscore
    ,week8_oppscore
    ,week9_oppscore
    ,week10_oppscore
    ,week11_oppscore
    ,week12_oppscore
    ,week13_oppscore
    ,week14_oppscore
    ,week15_oppscore
    ,week16_oppscore
    ,week17_oppscore
    ,week1_teamscore
    ,week2_teamscore
    ,week3_teamscore
    ,week4_teamscore
    ,week5_teamscore
    ,week6_teamscore
    ,week7_teamscore
    ,week8_teamscore
    ,week9_teamscore
    ,week10_teamscore
    ,week11_teamscore
    ,week12_teamscore
    ,week13_teamscore
    ,week14_teamscore
    ,week15_teamscore
    ,week16_teamscore
    ,week17_teamscore
    } = req.body
guess = new Guess({
    guessername
    ,date
    ,week1_oppscore 
    ,week2_oppscore 
    ,week3_oppscore 
    ,week4_oppscore 
    ,week5_oppscore 
    ,week6_oppscore 
    ,week7_oppscore 
    ,week8_oppscore 
    ,week9_oppscore 
    ,week10_oppscore 
    ,week11_oppscore 
    ,week12_oppscore 
    ,week13_oppscore 
    ,week14_oppscore 
    ,week15_oppscore 
    ,week16_oppscore 
    ,week17_oppscore 
    ,week1_teamscore 
    ,week2_teamscore 
    ,week3_teamscore 
    ,week4_teamscore 
    ,week5_teamscore 
    ,week6_teamscore 
    ,week7_teamscore 
    ,week8_teamscore 
    ,week9_teamscore 
    ,week10_teamscore 
    ,week11_teamscore 
    ,week12_teamscore 
    ,week13_teamscore 
    ,week14_teamscore 
    ,week15_teamscore 
    ,week16_teamscore 
    ,week17_teamscore 
});

await guess.save();
console.log(guess)
res.send('succesfully added guess to the DB')}
)


module.exports = router;


