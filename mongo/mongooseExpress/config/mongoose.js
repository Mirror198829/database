let mongoose = require('mongoose')
let config = require('./config.js')
module.exports = function(){
	var db = mongoose.connect(config.mongodb,{ useNewUrlParser: true });
	require('../models/user.server.model.js')
	return db
}