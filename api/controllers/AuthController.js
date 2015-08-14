/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

// api/controllers/AuthController.js

var passport = require('passport');

module.exports = {

    login: function(req, res) {
        res.view();
    },
    process: function(req, res) {
        passport.authenticate('local', function(err, user, info) {
            if( (err)||(!user) ) {
                return res.send(401, {
                    message: 'login failed'
                });
            }
            req.logIn(user, function(err) {
                return res.ok({
                    message: 'login successful'
                });
            });
        }) (req, res);
    },

    logout: function(req, res) {
        req.logOut();
        req.session.destroy(function(){
        	res.ok('logout successful');
        });
    }
};

module.exports.blueprints = {
    actions: true,
    rest: true,
    shortcuts: true
};