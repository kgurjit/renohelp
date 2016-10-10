'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Designer = sequelize.define('designer', {
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zipCode: Sequelize.STRING,
    phoneNumber: Sequelize.STRING
  });

  return Designer;
};