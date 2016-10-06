'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Contractor = sequelize.define('contractor', {
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zipCode: Sequelize.STRING,
    phoneNumber: Sequelize.INTEGER
  });

  return Contractor;
};