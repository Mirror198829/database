var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'cjtest'
}); 
connection.connect();
connection.query('SELECT * FROM userInfo', function (error, results, fields) {
   console.log('The solution is: ', results);
});
/* 
  The solution is:  [ RowDataPacket { id: 1, name: 'caojing', age: 18, sex: '女' },
  RowDataPacket { id: 2, name: '蒋鹏', age: 10, sex: '男' },
  RowDataPacket { id: 3, name: 'xiaoqiang', age: 12, sex: '女' },
  RowDataPacket { id: 4, name: 'xiaoxi', age: 12, sex: '男' },
  RowDataPacket { id: 5, name: 'maozedong', age: 10, sex: '男' },
  RowDataPacket { id: 6, name: 'xidada', age: 20, sex: '男' } ]
*/