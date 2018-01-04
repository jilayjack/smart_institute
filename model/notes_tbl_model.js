var db=require('../dbconnection');
var notes={
 
getAllNotes:function(callback){
 
return db.query("Select * from notes_tbl",callback);
 
},
addNotes:function(t,callback){
    return db.query("Insert into notes_tbl values(?,?,?,?)",[t.notes_id,t.notes_desc,t.notes_path,t.fk_course_id],callback);
    },
    deleteNotes:function(id,callback){
     return db.query("delete from notes_tbl where notes_id=?",[id],callback);
    },
    updateNotes:function(id,t,callback){
     return db.query("update notes_tbl set notes_desc=?,notes_path=?,fk_course_id=? where notes_id=?",[t.notes_desc,t.notes_path,t.fk_course_id,id],callback);
    } ,
    getnotesById:function(id,callback){
           
        return db.query("select * from notes_tbl where notes_id=?",[id],callback);
          
         }
   
};
module.exports=notes;