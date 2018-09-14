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

# 数据库设计范式
### 第一范式：无重复的列
* 每列属性是不可再分的，确保每列的原子性  
* 两列的属性相近或相似或一样，尽量合并属性一样的列，确保不产生冗余数据
### 第二范式：属性完全依赖于主键
* 一个表必须有一个主键 
* 且没有包含在主键的列必须完全依赖于主键，而不能只依赖主键的一部分
##### 索引
> 优点  
* 大大加快数据查询速度  
* 通过创建唯一索引，保证数据库每行数据的唯一性  
> 缺点  
* 维护索引需要耗费数据资源  
* 占用磁盘空间
* 影响对表的数据进行增删改的速度  
> 索引应用  
* INDEX索引 性能优化
* UNIQUE索引 避免数据出现重复，允许空值但仅允许有一个 
* PARIMARY索引 标识行，不允许空值
> 主键
添加PARIMARY的列也称为主键  
* 值唯一
* 不允许NULL值  
* 可以在创建表时定义，也可以在创建表之后定义  
> auto_increment  
* 自动生成整数值
* 新值为上一次插入值+1
* 只适用于证书列
* 必须有唯一索引
* 必须具备NOT NULL属性

### 第三范式：属性不能依赖于主属性
非主键列必须直接依赖于主键，不能存在传递依赖

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
