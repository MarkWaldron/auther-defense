
'use strict';

var mongoose = require('mongoose');
var Promise = require('bluebird');
var secrets = require('../config/secrets.js');
Promise.promisifyAll(mongoose);

var databaseURI = secrets.mongooseUrl.dbURI;

var db = mongoose.connect(databaseURI).connection;

db.on('open', function () {
  console.log('Database connection successfully opened');
});

db.on('error', function (err) {
  console.error('Database connection error', err);
});

module.exports = db;
