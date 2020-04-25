const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Application = db.model('Application', {
  status: String,
  _kid: {
    type: Schema.Types.ObjectId,
    ref: 'Kid'
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = Application;