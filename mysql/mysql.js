const mysql = require('mysql');
const Mock = require('mockjs');

console.log(mysql)
//nodejs与mysql连接
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'cj'
}); 
connection.connect();

//批量删除数据  
let delSql = 'DELETE FROM userinfo';
connection.query(delSql,(err,res)=>{
  console.log(res)
});

// 批量插入数据
let sql = "INSERT INTO userinfo (id,name,age,studyId,sex) VALUES ?"
let tableData = Mock.mock({    //批量传入数据的规定格式
  "data|200":[
    ["@id","@cname","@natural(20, 35)","@natural(1, 10)","@cword(男女)"]
  ]
})
//let tableData = [['adf','asdfasdf',12,12]]
connection.query(sql,[tableData.data], (err, results, fields) => {
   console.log('The solution is: ', results);
});


// 查询批量数据
// connection.query('SELECT * FROM userInfo', function (error, results, fields) {
//    console.log('The solution is: ', results);
// });

