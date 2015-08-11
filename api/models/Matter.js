/**
* Matter.js
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
   	matterType: {
   		type: 'string',
   		required: true,
    },
   	fileReference: {
   		type: 'string',
    },
  	client: { model: 'User' },
  	assignedTo: { model: 'User' },
  }
};

