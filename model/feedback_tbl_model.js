var db=require('../dbconnection');
var feedback={
 
getAllfeedback:function(callback){
 
return db.query("Select * from feedback_tbl",callback);
 
},
addFeedback:function(t,callback){
 return db.query("Insert into feedback_tbl values(?,?,?,?,?)",[t.feedback_id,t.feedback_title,t.feedback_desc,t.date,t.fk_student_id],callback);
 },
 deleteFeedback:function(id,callback){
  return db.query("delete from feedback_tbl where feedback_id=?",[id],callback);
 },
 updateFeedback:function(id,t,callback){
  return db.query("update feedback_tbl set feedback_title=?,feedback_desc=?,date=?,fk_student_id=? where feedback_id=?",[t.feedback_title,t.feedback_desc,t.date,t.fk_student_id,id],callback);
 },
 getFeedbackById:function(id,callback){
        
    return db.query("select * from feedback_tbl where feedback_id=?",[id],callback);
      
     }
 
};
module.exports=feedback;