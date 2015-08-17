/**
* Event.js
*
* @description :: NULL
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var eventTypes =  {
  ACCOUNT_CREATED: 'account_approved',
  CLIENT_APPROVED: 'client_approved',
  DETAILS_CHANGED: 'details_changed',
  DATE_CHANGED: 'date_changed',
  TASK_COMPLETION: 'task_completion',
  DOCUMENT_UPDLOAD: 'document_upload',
  ACCEPT_TOE: 'accept_toe',
  ACCEPT_LOE: 'accept_loe',
  MATTER_CREATED: 'matter_created',
  INVOICE_GENERATED: 'invoice_generated',
  VARIATION: 'variation',
  CONFLICT_CHECK: 'conflict_check',
  CORRESPONDENCE: 'correspondence'
};

module.exports = {
  eventTypes: eventTypes,
  attributes: {
   	id: {
      type: 'integer',
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
        type: 'string',
        enum: _.values(eventTypes)
    },
    text: {
    	type: 'string'
    },
    data: {
      type: 'json'
    },
    client: { model: 'User' },
  	matter: { model: 'Matter' },
  }
};

