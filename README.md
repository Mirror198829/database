# 数据类型
## 整数
|数据类型|数值范围|
|---|---|
|tinyint|-128~127|
|smallint|-32768~32767|
|mediumint|-8388608~8388607|
|init|-2147483648~2147483647|
|bigint|+-9.22*10的18次方 |
## default默认值
* 必须是常量
## unsigned
定义无符号的数值，对应的取值范围翻倍，只能存储正数，不能存储负数
## 字符串
|数据类型|含义|
|---|---|
|char|最多255个字符|
|varchar|最多65532个字符|
|tinytext|最多255个字符|
|text|最多65535个字符|
|mediumtext|最多2的24次方-1个字符|
|longtext|最多2的32次方-1个字符|
## 日期/时间
|数据类型|含义|
|---|---|
|date|日期，格式:YYYY-MM-DD|
|time|时间，格式：HH:MM:SS|
|datetime|日期时间：YYYY-MM-DD HH:MM:SS|
|timestamp|功能和datetime相同 但范围较小|
|year|年份，格式：YYYY|

# sql语句
### sql语句书写规范
* 英文括号、英文引号、英文逗号
* SQL语句不区分大小写
* 多条SQL需要分号分隔，单条SQL语句无需分号结束
* 必须要给不允许NULL值且没有默认值的列提供值，否则插入不成功
### 插入 INSERT INTO
``` javascript
//插入单条数据
INSERT INTO 表名 VALUES (值1，值2，值3……)
//示例，不推荐
INSERT INTO userinfo VALUES ('1','asdf',20,'女')

INSERT INTO 表名(列1，列2，列3……) VALUES(值1，值2，值3……)
//示例，推荐
INSERT INTO userinfo(id,name,age,sex) VALUES ('333','333',20,'男');

//插入多条数据
INSERT INTO 表名(列1，列2，列3……)VALUES(值1，值2，值3……),(值1，值2，值3……),(值1，值2，值3……)
```
### 查询 SELECT
``` javascript
SELECT 列名 FROM 表名;
//示例
SELECT name FROM userinfo;

SELECT 列名1,列名2,列名3,……from 表名;
//示例
SELECT name,age FROM userinfo;

SELECT * FROM 表名;
```
### 过滤数据 WHERE
|操作符|说明|
|---|---|
|=|等于|
|<>|不等于|
|!=|不等于|
|<|小于|
|<=|小于等于|
|>|大于|
|>=|大于等于|
|is NULL|是否为空值|
|between 值 and 值|在指定的两个值之间|
``` javascript
SELECT * FROM userinfo WHERE `name`='龚涛';
SELECT * FROM userinfo WHERE age BETWEEN 20 AND 25;
```
##### 组合WHERE子句
|操作符|说明|
|---|---|
|AND|与|
|OR|或|
|IN|匹配，与OR相当,查询速度更快，如果可以用IN替代OR，就用IN|
|NOT|非|
``` javascript
SELECT * FROM userinfo WHERE name = '白洋' OR name = '冯强';
SELECT * FROM userinfo WHERE name IN ('白洋','冯强'); //查询速度更快
SELECT * FROM userinfo WHERE name NOT IN ('白洋','冯强');
```
##### 通配符 like
|通配符|说明|
|---|---|
|%|匹配任意字符，任意次数|
| _ |总是匹配一个个字符|  
``` javascript
SELECT * FROM userinfo WHERE name LIKE '%张%';
```
### 更新数据 UPDATE
``` javascript
//如果不写where子句，将会修改表中所有行
UPDATE 表名 SET 列名1 = 值1 WHERE 子句
UPDATE userinfo SET name = '曹静' WHERE `name`='张静'
```
### 删除数据 DELETE
``` javascript
//不写WHERE将删除所有数据
DELETE FROM 表名 WHERE子句
DELETE FROM userinfo WHERE NAME = '曹静'
```
### 排序 ORDER BY
* 默认升序(ASC)排序
* 降序排序DESC
* order by 列名1
* order by 列名1,列名2
* order by 列名1 DESC,列名2
* order by 列名1 DESC,列名2 DESC
* 如果有where子句，放在where子句之后
