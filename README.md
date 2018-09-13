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
