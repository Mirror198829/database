let mongoose = require('mongoose')
require('./model.js')
let Book = mongoose.model('Book')
Book.find({},(err,docs)=>{
	if(err){
		console.log('err:',err)
		return
	}
	console.log('result:',docs)
})