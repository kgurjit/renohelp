var express = require('express');
var router = express.Router();
var ORM = require('../app/config/orm');

router.get('/contractorsall', function(req, res, next) {
  ORM.getAllContractors(function(data){
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
