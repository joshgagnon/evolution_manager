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
                return res.send({
                    message: 'login failed'
                });
                return res.send(err);
            }
            req.logIn(user, function(err) {
                return res.send({
                    message: 'login successful'
                });
            });
        }) (req, res);
    },

    logout: function(req, res) {
        req.logOut();
        req.session.destroy(function(){
        	res.send('logout successful');
        });
    }
};

module.exports.blueprints = {
    actions: true,
    rest: true,
    shortcuts: true
};