var express = require('express');
var router = express.Router();

router.get('/contractors', function(req, res, next) {
  res.json([{id: 1, name: 'Singh', loc: 'Edison', costPerHour: 75},{id: 2, name: 'Kaur', loc: 'Woodbridge', costPerHour: 85},]);
});

module.exports = router;
