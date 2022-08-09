const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');



router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
],
 (req, res) => {
const errors = validationResult(req);
if(!errors.isEmpty()) {
    return res.status(400).json({errors : errors.array()});
}

res.send('User route');
}
);

module.exports = router;