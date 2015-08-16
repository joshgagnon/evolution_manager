/**
* Document.js
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
    data: {
    	type: 'binary',
    	required: true
    },
   	name: {
   		type: 'string',
   		required: true,
    },
    pending: {
        type: 'boolean',
        defaultsTo: true
    },
  	matter: { model: 'Matter' },
    uploader: { model: 'User' }
  },
      toJSON: function() {
        var obj = this.toObject();
        delete obj.data;
        return obj;
    }
};

