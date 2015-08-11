/**
* Event.js
*
* @description :: NULL
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
    text: {
    	type: 'string'
    },
  	matter: { model: 'Matter' },
  }
};

