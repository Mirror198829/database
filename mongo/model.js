/**
 * create by caojing on 2018/9/19
 */
let mongoose= require('mongoose')
let uri = 'mongodb://username:password@hostname:port/databasename';//定位符
uri = 'mongodb://localhost/test'
mongoose.connect(uri, { useNewUrlParser: true })

let BookSchema = new mongoose.Schema({
	name:String,
	author:String,
	publishTime:Date
})
mongoose.model('Book',BookSchema)  //model命名的时候第1个字大写