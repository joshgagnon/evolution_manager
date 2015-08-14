// api/services/passport.js

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findOne(id, done);
});

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function(email, password, done) {
        User.findOne({ email: email })
        .then(function(user){
            if(!user) throw { message: 'Unknown user ' + email };
            return user.verifyPassword(password);
        })
        .then(function(user){
            sails.log.info('log in succeeded', user.email);
            done(null, user);
        })
        .catch(function(error){
            sails.log.info('log in failed', error);
            done(null, false, error);
        })
    }
));