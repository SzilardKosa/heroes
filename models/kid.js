const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Kid = db.model('Kid', {
  status: String,
  name: String,
  age: Number,
  gender: String,
  universe: String,
  abilities: String,
  profile: String
});

module.exports = Kid;