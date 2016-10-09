'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('item', {
    itemName: Sequelize.STRING
  });

  return Item;
};