var express = require('express');
var router = express.Router();
var db = require('../database/db');

/* GET home page. */
router.get('/', function(req, res, next) { 
  res.render('opretelsluger'); //rendere siden med formen
});

router.post('/', function(req, res, next) {
    db.createElsluger(req.body).then((result) => { //bruger req.body til at oprette en ny elsluger via db metoden.
        res.redirect('/elslugere2');
    }).catch((err) => { //catch hvis ikke der resolves
        console.log(err);
        res.send(err);
    });
});

module.exports = router;
