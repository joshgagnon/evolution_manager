/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

var uuid = require('node-uuid');
var SALT_WORK_FACTOR = 10;
var Promise = require("bluebird");
var bcrypt = Promise.promisifyAll(require('bcrypt'));

var MIN_PASSWORD = 8;

var validatePassword = function(newPassword){
    if(!newPassword || newPassword.length < MIN_PASSWORD){
        throw new sails.config.exceptions.ValidationException("Password must be atleast "+MIN_PASSWORD+" characters");
    }
}


module.exports = {

    attributes: {

        id: {
            type: 'integer',
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: 'string',
            required: true,
        },
        email: {
            type: 'email',
            required: true,
            unique: true,
        },
        password: {
            type: 'string',
            required: true
        },
        accountType: {
            type: 'string',
            enum: ['client', 'staff', 'admin'],
            defaultsTo: ['client'],
            required: true
        },
        entityType: {
            type: 'string',
            enum: [null, 'company', 'individual', 'partnership'],
            defaultsTo: ['individual'],
        },
        active: {
            type: 'boolean',
            defaultsTo: true
        },
        pending: {
            type: 'boolean',
            defaultsTo: true
        },
        chargeCCAuthority: {
            type: 'boolean',
            defaultsTo: false
        },
        address: {
            model: 'Address'
        },
        verifyPassword: function(password) {
            return bcrypt.compareAsync(password, this.password)
               .then(function(result){
                    if(!result) throw true;
                    return this;
                }.bind(this))
               .catch(function(){
                    throw new sails.config.exceptions.ForbiddenException('Incorrect Password');
               })
        },

        changePassword: function(newPassword) {
            validatePassword(newPassword);
            this.newPassword = newPassword;
            return this.save();
        },

        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    },

    beforeCreate: function(attrs, cb) {
        validatePassword(attrs.password);
        bcrypt.hash(attrs.password, SALT_WORK_FACTOR, function(err, hash) {
            attrs.password = hash;
            return cb();
        });
    },

    beforeUpdate: function(attrs, cb) {
        if (attrs.newPassword) {
            bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
                if (err) return cb(err);
                bcrypt.hash(attrs.newPassword, salt, function(err, crypted) {
                    if (err) return cb(err);
                    delete attrs.newPassword;
                    attrs.password = crypted;
                    return cb();
                });
            });
        } else {
            return cb();
        }
    },
    afterCreate: function(updatedRecord, cb){
        Event.create({type: Event.eventTypes.ACCOUNT_CREATED,
            client: updatedRecord.id, text: "User Created", data: updatedRecord})
            .then(function(){
                cb();
            })
    },
    afterUpdate: function(updatedRecord, cb){
        Event.create({type: Event.eventTypes.DETAILS_CHANGED,
            client: updatedRecord.id, text: "User Details changed.", data: updatedRecord})
            .then(function(){
                cb();
            })
    }
};