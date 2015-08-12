var Sails = require('sails');
var Promise = require("bluebird");
var Barrels = require("barrels");
var fs = Promise.promisifyAll(require("fs"));
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
var sails;

before(function(done) {
    this.timeout(5000);
    Sails.lift({
        log: {
            level: 'error'
        },
        models: {
            connection: 'test',
            migrate: 'drop'
        }
    }, function(err, server) {
        sails = server;
        sails.log.info('Sails Lifted');
        if (err) return done(err);
        var barrels = new Barrels();
        // Populate the DB
        barrels.populate(['users'], function(err) {
            done(err);
        });
    });
});

after(function(done) {
    console.log(); // Skip a line before displaying Sails lowering logs
    sails.lower(done);
});