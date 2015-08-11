/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

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
   		unique: true
    },
   	password: {
   		type: 'string',
   		required: true,
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
   	pending: {
   		type: 'boolean',
   		defaultsTo: true
    },
   	chargeCCAuthority: {
   		type: 'boolean',
   		defaultsTo: false
    },
    address: { model: 'Address' },
  }
};

