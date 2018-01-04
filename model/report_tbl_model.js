var db=require('../dbconnection');
var report={
 
getAllReport:function(callback){
 
   // console.log('aama aayu');
return db.query("Select * from report_tbl",callback);
 
},
addReport:function(t,callback){
 return db.query("Insert into report_tbl values(?,?,?,?,?)",[t.report_id,t.report_title,t.report_desc,t.date,t.fk_faculty_id],callback);
 },
 deleteReport:function(id,callback){
  return db.query("delete from report_tbl where report_id=?",[id],callback);
 },
 updateReport:function(id,t,callback){
  return db.query("update report_tbl set report_title=?,report_desc=?,date=?,fk_faculty_id=? where report_id=?",[t.report_title,t.report_desc,t.date,t.fk_faculty_id,id],callback);
 },
 getReportById:function(id,callback){
        
    return db.query("select * from report_tbl where report_id=?",[id],callback);
      
     }
 
};
module.exports=report;
