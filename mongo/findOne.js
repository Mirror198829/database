let mongoose = require('mongoose')
require('./model.js')
let Book = mongoose.model('Book')
Book.findOne({name:'caojing'},(err,doc)=>{
	if(err){
		console.log('err:',err)
		return
	}
	console.log('result',doc)
})