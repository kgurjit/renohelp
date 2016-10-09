'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Store = sequelize.define('store', {
    storeName: Sequelize.STRING
  });

  return Store;
};