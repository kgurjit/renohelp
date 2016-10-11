var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/category/:catgName', function(req, res, next){
	//TODO: Populate data from database
	var data = {};
	switch (catgName){
		case 'kitchen':
			data.name = req.params.catgName;
			data.contractors = [];
			data.videos = [];
			data.images = {before: 'big_2.jpg', after: 'big_1.jpg'};
			break;
		case 'bathroom':
			data.name = req.params.catgName;
			data.contractors = [];
			data.videos = [];
			data.images = {before: 'big_2.jpg', after: 'big_1.jpg'};
			break;
	}
	 
	res.render('category', {'data': data});
});

router.get('/contractors', function(req, res, next){
	res.render('contractors', {name: 'Contractors', js: ['contractors.js']});
});

router.get('/designers', function(req, res, next){
	res.render('designers', {name: 'Designers'});
});

router.get('/videos', function(req, res, next){
	res.render('videos', {name: 'Videos'});
});

module.exports = router;
