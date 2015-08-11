/**
* Address.js
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
   	line_1: {
   		type: 'string',
   		required: true,
    },
   	line_2: {
   		type: 'string',
    },
   	line_3: {
   		type: 'string',
    },
   	city: {
   		type: 'string',
   		required: true,
    },
   	postcode: {
   		type: 'string',
   		required: true,
    },
  }
};
