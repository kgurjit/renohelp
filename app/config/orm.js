var db = require('../../models');
var bcrypt = require('bcrypt-nodejs');
var Contractor = require('../../models')["contractor"];
var Designer = require('../../models')["designer"];
var Category = require('../../models')["category"];
var User = require('../../models')["user"];
var DIYVideo = require('../../models')["diyvideo"];
var Item = require('../../models')["item"];
var Store = require('../../models')["store"];

var geocoder = require('geocoder');


var orm = {
  
  createUser: function(user, callback, error) {
    User.findOne({
      where: {
        username: user.username
      }
    }).then(function(model) {
      if (model) {
        error('User name already exists. Please login using sign in link.');
      } else {
        // password validation can be performed here
        var password = user.password;
        var hash = bcrypt.hashSync(password);

        db.user.create({
          username: user.username,
          password: hash
        }).then(function(model) {
          callback();
        }).catch(function() {
          error('Error creating user');
        });
      }
    });
  },

  getAllCategories: function(callback) {
    Category.findAll().then(function(categories) {
      callback(categories);
    });
  },

  getAllContractors: function(callback) {
    Contractor.findAll().then(function(contractors) {
      callback(contractors);
    });
  },

  getAllDesigners: function(callback) {
    Designer.findAll().then(function(designers) {
      callback(designers);
    });
  },

  getAllDIYVideos: function(callback) {
    DIYVideo.findAll().then(function(diyvideos) {
      callback(diyvideos);
    });
  },

  getAllStores: function(callback) {
    Store.findAll().then(function(stores) {
      callback(stores);
    });
  },
  
  getContractorById: function(id, callback) {
    Contractor.findOne({
      where: {
        id: id
      }
    }).then(function(contractor) {
      callback(contractor);
    });
  },

  getDesignerById: function(id, callback) {
    Designer.findOne({
      where: {
        id: id
      }
    }).then(function(designer) {
      callback(designer);
    });
  },

  getDIYVideoById: function(id, callback) {
    DIYVideo.findOne({
      where: {
        id: id
      }
    }).then(function(diyvideo) {
      callback(diyvideo);
    });
  },

  getDIYVideoById: function(id, callback) {
    DIYVideo.findOne({
      where: {
        id: id
      }
    }).then(function(diyvideo) {
      callback(diyvideo);
    });
  },

  getDIYVideosForCategories: function(category, callback, error) {
    DIYVideo.findAll({
      where: {
        category: category
      }
    }).then(function(DIYVideos){
      if(!DIYVideos || DIYVideos.length === 0) {
        DIYVideos = [];
      }
      callback(DIYVideos);
    }).catch(function(){
      error();
    })
  },

  getContractorsByZipcode: function(zipCode, callback, error) {
    Contractor.findAll({
      where: {
        zipCode: zipCode
      }
    }).then(function(Contractors){
      if(!Contractors || Contractors.length === 0) {
        Contractors = [];
      }
      callback(Contractors);
    }).catch(function(){
      error();
    })
  },

  getDIYVideosForCategories: function(categoryId, callback, error) {
    DIYVideo.findAll({
      where: {
        categoryId: {$eq: categoryId}
      }
    }).then(function(DIYVideos){
      if(!DIYVideos || DIYVideos.length === 0) {
        DIYVideos = [];
      }
      callback(DIYVideos);
    }).catch(function(){
      error();
    })
  }

};

module.exports = orm;