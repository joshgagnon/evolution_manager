/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    changePassword: function(req, res) {
        req.user.verifyPassword(req.allParams().currentPassword)

            .then(function(){
                return req.user.changePassword(req.allParams().newPassword);
            })
            .then(function(){
                return res.ok({message: 'Updated password'});
            })
            .catch(sails.config.exceptions.ForbiddenException, function(){
                return res.forbidden()
            })
            .catch(sails.config.exceptions.ValidationException, function(){
                res.badRequest();
            })
    }
};

