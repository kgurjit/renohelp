var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/kitchen', function(req, res, next){
	res.render('category', {name: 'Kitchen'});
});

router.get('/bathroom', function(req, res, next){
	res.render('category', {name: 'Bathroom'});
});

module.exports = router;
