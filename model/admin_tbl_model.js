var db=require('../dbconnection');
var admin={
 
getadmin:function(t,callback){
 
    //console.log('aama aayu');
return db.query("Select * from admin_tbl where admin_email_id=? and pass=?",[t.admin_email_id,t.pass],callback);
 
},
getad:function(callback){
 
    return db.query("Select * from admin_tbl",callback);
     
    },

};
module.exports=admin;
