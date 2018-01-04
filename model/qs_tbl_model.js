var db=require('../dbconnection');
var question={
 
getAllQuestion:function(callback){
 
return db.query("Select * from qs_tbl",callback);
 
},
addQuestion:function(t,callback){
 return db.query("Insert into qs_tbl values(?,?,?,?,?)",[t.qs_id,t.qs_title,t.qs_desc,t.fk_student_id,t.date],callback);
 },
 deleteQuestion:function(id,callback){
  return db.query("delete from qs_tbl where qs_id=?",[id],callback);
 },
 updateQuestion:function(id,t,callback){
  return db.query("update qs_tbl set qs_title=?,qs_desc=?,fk_student_id=?,date=? where qs_id=?",[t.qs_title,t.qs_desc,t.fk_student_id,t.date,id],callback);
 },
 getQueById:function(id,callback){
        
    return db.query("select * from qs_tbl where qs_id=?",[id],callback);
      
     }
 
};
module.exports=question;
