const express = require("express");
const router = express.Router();


router.get('/', (req, res) => {
    res.render('water.ejs', {waterTraits: ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensative']});
});