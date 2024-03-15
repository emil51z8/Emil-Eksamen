var express = require('express');
var router = express.Router();
var db = require('../database/db');

/* GET home page. */
router.get('/', function(req, res, next) {
    db.getAllElslugere().then((elslugerer) => { //henter data fra databasen 
        res.render('elslugere2', {elslugerer}); //overfører data til viewet
    }).catch((err) => { //catch hvis ikke der resolves
        console.log(err);
        res.send(err);
    });
});
module.exports = router;
