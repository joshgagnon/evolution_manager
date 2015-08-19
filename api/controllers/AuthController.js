/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

// api/controllers/AuthController.js

var passport = require('passport');

module.exports = {

   /* login: function(req, res) {
        res.renderRoute();
    },*/
    process: function(req, res) {
        passport.authenticate('local', function(err, user, info) {
            if( (err)||(!user) ) {
                let msg = {
                        message: 'login failed'
                    }
                if(req.wantsJSON){
                    return res.send(401, msg);
                }else{
                    req.flash('data', JSON.stringify({login: {error: msg}}));
                    return res.redirect('/');
                }
            }
            req.logIn(user, function(err) {
                if(req.wantsJSON){
                    return res.ok({
                        message: 'login successful'
                    });
                }
                else{
                    res.redirect('home');
                }
            });
        }) (req, res);
    },

    logout: function(req, res) {
        req.logOut();
        req.session.destroy(function(){
            if(req.wantsJSON){
        	   res.ok('logout successful');
            }
            else{
                res.redirect('/');
            }
        });
    }
};

