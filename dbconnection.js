var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'localhost',
 user:'root',
 password:'',
 database:'smart_institute'
 
});
 module.exports=connection;