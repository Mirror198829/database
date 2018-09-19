var express = require('express');
var router = express.Router();
 
var mongoose = require('mongoose');
var User = mongoose.model('User')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/info',(req,res,next)=>{
	let user = new User({
		uid:1,
		userName:'Sid'
	})
	user.save((err)=>{
		if(err){
			res.end('Error');
			return next()
		}
		User.find({},(err,docs)=>{
			if(err){
				res.end('Error')
				return next()
			}
			res.json(docs)
		})
	})
})

module.exports = router;
