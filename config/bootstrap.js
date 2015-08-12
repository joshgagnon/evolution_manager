/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */
//var Promise = require("nodegit-promise");
var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));


module.exports.bootstrap = function(cb) {
	var loadUsers = fs.readFileAsync('seeds/users.json', 'utf8')
	.then(JSON.parse)
	.then(function(data){
		return Promise.all(data.map(function(data){
			return sails.models.user.create(data);
		}));
	})
	.catch(SyntaxError, function(e) {
	    sails.log.error("invalid json in file");
	})
	.catch(function(e) {
	    sails.log.error(e, "unable to read file");
	});


	loadUsers
		.then(function(){
			sails.models.user.find({}).exec(function findCB(err, found){
			  while (found.length)
			    console.log('Found User with name ' + found.pop().name)
			});
		})
		.then(cb)
};