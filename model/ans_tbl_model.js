var db=require('../dbconnection');
var ans={
 
getAllAns:function(callback){
 
return db.query("Select * from ans_tbl",callback);
 
},
addans:function(t,callback){
 return db.query("Insert into ans_tbl values(?,?,?,?,?)",[t.ans_id,t.ans_desc,t.fk_qs_id,t.fk_email_id,t.date],callback);
 },
 deleteans:function(id,callback){
  return db.query("delete from ans_tbl where ans_id=?",[id],callback);
 },
 updateans:function(id,t,callback){
  return db.query("update ans_tbl set ans_desc=?,fk_qs_id=?,fk_email_id=?,date=? where ans_id=?",[t.ans_desc,t.fk_qs_id,t.fk_email_id,t.date,id],callback);
 },
 getAnskById:function(id,callback){
        
    return db.query("select * from ans_tbl where ans_id=?",[id],callback);
      
     }
 
};
module.exports=ans;
