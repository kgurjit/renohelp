var express = require('express');
var router = express.Router();
var ORM = require('../app/config/orm');

router.get('/contractors', function(req, res, next) {
  ORM.getAllContractors(function(data){
    if (!req.isAuthenticated()) {
      data = data.map(function(d){
        return {name: d.name, city: d.city};
      });  
    }
    res.json(data);
  })
});

router.get('/designersall', function(req, res, next) {
  ORM.getAllDesigners(function(data){
    res.json(data);
  })
});

router.get('/diyvideosall', function(req, res, next) {
  ORM.getAllDIYVideos(function(data){
    res.json(data);
  })
});

router.get('/diyvideosbycategories', function(req, res, next) {
  ORM.getDIYVideoById(function(data){
    res.json(data);
  })
});




module.exports = router;
