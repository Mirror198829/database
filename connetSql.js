const mysql = require('mysql');
const Mock = require('mockjs');

//nodejs与mysql连接
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'cjtest'
}); 
connection.connect();

//批量删除数据
let delSql = 'DELETE FROM userInfo';
connection.query(delSql,(err,res)=>{
  console.log(res)
});

// 批量插入数据
let sql = "INSERT INTO userInfo (id,name,age,sex) VALUES ?"
let tableData = Mock.mock({    //批量传入数据的规定格式
  "data|200":[
    ["@id","@cname","@natural(20, 35)","@cword(男女)"]
  ]
})
connection.query(sql,[tableData.data], (err, results, fields) => {
   console.log('The solution is: ', results);
});
// connection.query('SELECT * FROM userInfo', function (error, results, fields) {
//    console.log('The solution is: ', results);
// });

