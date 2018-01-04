var db=require('../dbconnection');
var sub={
 
getAllSubject:function(callback){
 
return db.query("Select * from subject_tbl",callback);
 
},
addSub:function(t,callback){
    return db.query("Insert into subject_tbl values(?,?,?,?,?)",[t.sub_id,t.sub_title,t.sub_desc,t.fk_faculty_id,t.fk_cousre_id],callback);
    },
    deleteSub:function(id,callback){
     return db.query("delete from subject_tbl where sub_id=?",[id],callback);
    },
    deleteAll:function(item,callback){
        //console.log(item.length);
            var delarr=[];
                for(i=0;i<item.length;i++){
        
                  //  console.log(item[i].course_id);
                    delarr[i]=item[i].sub_id;
                }
          //      console.log(this.delarr);
                return db.query("delete from subject_tbl where sub_id IN (?)",[delarr],callback);
                 },
     
    
    updateSub:function(id,t,callback){
     return db.query("update subject_tbl set sub_title=?,sub_desc=?,fk_faculty_id=?,fk_cousre_id=? where sub_id=?",[t.sub_title,t.sub_desc,t.fk_faculty_id,t.fk_course_id,id],callback);
    },
    getsubById:function(id,callback){
           
       return db.query("select * from subject_tbl where sub_id=?",[id],callback);
         
        },
        subCourseFaculty:function(callback)
        {
            return db.query("select s.*,c.*,f.* from subject_tbl s,course_tbl c,faculty_tbl f where s.fk_cousre_id=c.course_id and s.fk_faculty_id=f.faculty_id",callback);
        }

    
};
module.exports=sub;