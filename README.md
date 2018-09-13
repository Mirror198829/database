# 前期准备
### 安装(win相关操作)
参考： http://www.runoob.com/mysql/mysql-install.html   
下载sqlserver：https://dev.mysql.com/downloads/mysql/ （最新版本，但是与Navicat出现版本不符的问题）  
安装版本：mysql-5.5.38-winx64（https://jingyan.baidu.com/article/1974b289515587f4b1f774d7.html）
``` c
cd C:\Program Files\MySQL\MySQL Server 5.5\bin
//启动服务
net start mysql  
//停止服务
net stop mysql
```
### mysql可视化管理工具安装
- windows：Navicat Premium\PHPMyAdmin\MYSQL_Front
- Mac：PHPMyAdmin\Sequel Pro  
在windows下安装Navicat Premium

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
