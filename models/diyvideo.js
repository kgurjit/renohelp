'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var DIYVideo = sequelize.define('diyvideo', {
    title: Sequelize.STRING,
    url: Sequelize.STRING,
    category: Sequelize.STRING
  });

  return DIYVideo;
};
