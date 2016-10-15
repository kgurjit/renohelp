var express = require('express');
var router = express.Router();
var orm = require('../app/config/orm');
var passport = require('passport');

router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/logout', function(req, res, next) {
	if (!req.isAuthenticated()) {
		res.redirect('/login'); 
	} else {
		req.logout();
		res.redirect('/login'); 
	}
});

router.get('/login', function(req, res, next){
	res.render('login');
});

router.get('/signup', function(req, res, next){
	res.render('signup');
});

router.post('/signup', function(req, res, next){
	orm.createUser({username: req.body.username, password:req.body.password}, function(){
		res.redirect('/');
	}, function(err){
		res.render('error');
	});
});

router.post('/login', function(req, res, next){
	passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/login'
	}, function(err, user, info) {
		if (err || !user) {
			var message = err ? err.message : info.message;

			return res.render('login', {
				title: 'Login',
				errorMessage: message
			});
		}
		return req.logIn(user, function(err) {
			if (err) {
				return res.render('login', {
					title: 'Login',
					errorMessage: err.message
				});
			} else {
				return res.redirect('/');
			}
		});
	})(req, res, next);
});

router.get('/category/:catgName', function(req, res, next){
	//TODO: Populate data from database
	var data = {};
	switch (req.params.catgName){
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
	orm.getAllDesigners(function(designers){
		res.render('designers', {name: 'Designers', designers: designers});	
	});
});

router.get('/videos', function(req, res, next){
	res.render('videos', {name: 'Videos'});
});

module.exports = router;
