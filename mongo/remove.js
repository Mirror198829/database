let mongoose = require('mongoose')
require('./model.js')
let Book = mongoose.model('Book')
Book.findOne({author:'maozedong'},(err,doc)=>{
	if(err){
		console.log('findOne err:',err)
		return
	}
	if(doc){
		doc.remove()
	}
})