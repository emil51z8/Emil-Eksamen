var express = require('express');
var router = express.Router();
var datahandler = require('../datahandler/datahandler.js'); //importere datahandleren

/* GET home page. */
router.get('/', function(req, res, next) {
    datahandler.getData().then((prices) => { //henter data fra datahandleren
        res.render('elpriser1', {prices}); //overfører liste af data til viewet
    }).catch((err) => {
        console.log(err);
    });
});


module.exports = router;