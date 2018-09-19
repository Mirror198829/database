let mongoose = require('mongoose');
require('./model.js')
let Book = mongoose.model('Book');
let book = new Book({
	name:'caojing',
	author:'c',
	publishTime:new Date()
})
book.save(function(err){
	console.log('save status:',err ? 'failed' : 'success')
})