let mongoose = require('mongoose')
require('./model.js')
let Book = mongoose.model('Book')
let cond = {
	$or:[            //$or 或者 $on
	{author:'caojing'},
	{author:'jiangpeng'}
	]
}
Book.find(cond,(err,doc)=>{
	if(err){
		console.log('find by cond err:',err)
		return
	}
	console.log('cond:',cond,'results:',doc)
})