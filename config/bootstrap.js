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


require("babel/register")({
  stage: 0,
  plugins: ["typecheck"]
});


var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));

var Barrels = require("barrels");


module.exports.bootstrap = function(done) {
    var barrels = new Barrels();
    // Populate the DB
    barrels.populate(['user'], function(err) {
        done(err);
    });
	//done();
};