var db=require('../dbconnection');
var course={
 
getAllCourse:function(callback){
 
return db.query("Select * from course_tbl",callback);
 
},
addCourse:function(t,callback){
 return db.query("Insert into course_tbl values(?,?,?,?,?)",[t.course_id,t.course_title,t.course_desc,t.course_duration,t.course_fees],callback);
 },
 deleteCourse:function(id,callback){
  return db.query("delete from course_tbl where course_id=?",[id],callback);
 },
 deleteAll:function(item,callback){
//console.log(item.length);
    var delarr=[];
        for(i=0;i<item.length;i++){

          //  console.log(item[i].course_id);
            delarr[i]=item[i].course_id;
        }
  //      console.log(this.delarr);
        return db.query("delete from course_tbl where course_id IN (?)",[delarr],callback);
         },
 updateCourse:function(id,t,callback){
    return db.query("update course_tbl set course_title=?,course_desc=?,course_duration=?,course_fees=? where course_id=?",[t.course_title,t.course_desc,t.course_duration,t.course_fees,id],callback);
 },
 getCoursekById:function(id,callback){
        
    return db.query("select * from course_tbl where course_id=?",[id],callback);
      
     }

};
module.exports=course;