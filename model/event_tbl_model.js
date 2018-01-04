var db=require('../dbconnection');
var event={
 
getAllEvent:function(callback){
 
    console.log('aama aayu');
return db.query("Select * from event_tbl",callback);
 
},
addEvent:function(t,callback){
 return db.query("Insert into event_tbl values(?,?,?,?,?,?,?,?)",[t.event_id,t.event_title,t.event_desc,t.event_location,t.event_img,t.event_date,t.seminar_video,t.fk_course_id],callback);
 },
 deleteEvent:function(id,callback){
  return db.query("delete from event_tbl where event_id=?",[id],callback);
 },
 deleteAll:function(item,callback){
    //console.log(item.length);
        var delarr=[];
            for(i=0;i<item.length;i++){
    
              //  console.log(item[i].course_id);
                delarr[i]=item[i].event_id;
            }
      //      console.log(this.delarr);
            return db.query("delete from event_tbl where event_id IN (?)",[delarr],callback);
             },
 

 updateEvent:function(id,t,callback){
  return db.query("update event_tbl set event_title=?,event_desc=?,event_location=?,event_img=?,event_date=?,seminar_video=?,fk_course_id=? where event_id=?",[t.event_title,t.event_desc,t.event_location,t.event_img,t.event_date,t.seminar_video,t.fk_course_id,id],callback);
 },
 getEventkById:function(id,callback){
        
    return db.query("select * from event_tbl where event_id=?",[id],callback);
      
     },
     eventCourse:function(callback)
     {
         return db.query("select e.*,c.* from event_tbl e,course_tbl c where e.fk_course_id=c.course_id",callback);
     }
};
module.exports=event;
