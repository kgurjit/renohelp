var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/category/:catgName', function(req, res, next){
	//TODO: Populate data from database
	var data = {};
	data.name = req.params.catgName;
	data.contractors = [];
	data.videos = [];
	res.render('category', {'data': data});
});

router.get('/contractors', function(req, res, next){
	res.render('contractors', {name: 'Contractors'});
});

router.get('/designers', function(req, res, next){
	res.render('designers', {name: 'Designers'});
});

router.get('/videos', function(req, res, next){
	res.render('videos', {name: 'Videos'});
});

module.exports = router;
