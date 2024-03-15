var express = require('express'); //importere express
var router = express.Router(); //oprette en router

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('elslugere1'); //rendere siden med den hardcodede data
});

module.exports = router;
