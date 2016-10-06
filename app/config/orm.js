var db = require('../../models');
var bcrypt = require('bcrypt-nodejs');
var Contractor = require('../../models')["contractor"];
var Designer = require('../../models')["designer"];
var Category = require('../../models')["category"];
var User = require('../../models')["user"];
var DIYVideo = require('../../models')["diyvideo"];

var geocoder = require('geocoder');


var ad = {
  getById: function(id, callback) {
    Contractor.findOne({
      where: {
        id: id
      },
      include: [User, Category]
    }).then(function(Contractor) {
      callback(Contractor);
    });
  },

  // getContractorsForUser: function(userId, callback, error) {
  //   Contractor.findAll({
  //     where: {
  //       userId: {$eq: userId}
  //     }
  //   }).then(function(Contractors){
  //     if(!Contractors || Contractors.length === 0) {
  //       Contractors = [];
  //     }
  //     callback(Contractors);
  //   }).catch(function(){
  //     error();
  //   })
  // },

  // deleteContractor: function(ContractorId, callback, error){
  //   Contractor.destroy({where: {id: {$eq: ContractorId}}}).then(function(){
  //     callback();
  //   }).catch(function(){
  //     error();
  //   });
  // },

  
// searchByKeywordsAndLoc: function(catgId, loc, callback, error) {

//         var condition = {};

//         if(catgId !== '') {
//             condition['where'] = {categoryId: catgId};
//         }
      
//       if(loc && loc.trim().length === 5) {

//           if(catgId == '') {
//               condition['where'] = {zipCode: {$eq: loc}};
//           } else    {
//           condition.where['$and'] = {zipCode: {$eq: loc}};
//           }
          
//       }    

//       Contractor.findAll(condition).then(function(Contractors) {
//       if(!Contractors || Contractors.length === 0) {
//           Contractors = [];
//       } 
//       callback(Contractors);
//       }).catch(function(){
//       if(error) {
//           error();
//       }
//       });
//  },

  getAllCategories: function(callback) {
    Category.findAll().then(function(categories) {
      callback(categories);
    });
  },

  // createContractor: function(ContractorData, callback, error) {
  //   var completeAddress = ContractorData.address + "," + ContractorData.city + "," + ContractorData.state + " " + ContractorData.zipCode;
  //   console.log('\n\nComplete Address: ' + completeAddress);

  //   geocoder.geocode(completeAddress, function(err, data) {
  //     ContractorData["latitude"] = data.results[0].geometry.location.lat;
  //     ContractorData["longitude"] = data.results[0].geometry.location.lng;
  //     console.log('\n\nLat: ' + ContractorData["latitude"]);
  //     console.log('\n\nLng: ' + ContractorData["longitude"]);

  //     Contractor.create(ContractorData).then(function(createdContractor) {
  //       callback(createdContractor.id);
  //     }).catch(function() {
  //       error();
  //     });
  //   });
  // },

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
  }
};


module.exports = ad;