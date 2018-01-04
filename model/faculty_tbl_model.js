var db=require('../dbconnection');
var faculty={
 
getAllfaculty:function(callback){
 
return db.query("Select * from faculty_tbl",callback);
 
},
addfaculty:function(t,callback){
    return db.query("Insert into faculty_tbl values(?,?,?,?,?,?,?,?,?,?)",[t.faculty_id,t.f_email_id,t.f_pass,t.faculty_name,t.f_address,t.f_m_no,t.f_qalification,t.f_experience,t.f_join_date,t.f_img],callback);
    },
    deletefaculty:function(id,callback){
     return db.query("delete from faculty_tbl where faculty_id=?",[id],callback);
    },
    deleteAll:function(item,callback){
       //console.log(item.length);
           var delarr=[];
               for(i=0;i<item.length;i++){
       
                 //  console.log(item[i].course_id);
                   delarr[i]=item[i].faculty_id;
               }
         //      console.log(this.delarr);
               return db.query("delete from faculty_tbl where faculty_id IN (?)",[delarr],callback);
                },
    updatefaculty:function(id,t,callback){
     return db.query("update faculty_tbl set f_email_id=?,f_pass=?,faculty_name=?,f_address=?,f_m_no=?,f_qalification=?,f_experience=?,f_join_date=?,f_img=? where faculty_id=?",[t.f_email_id,t.f_pass,t.faculty_name,t.f_address,t.f_m_no,t.f_qalification,t.f_experience,t.f_join_date,t.f_img,id],callback);
    },
    getfacultyById:function(id,callback){
           
       return db.query("select * from faculty_tbl where faculty_id=?",[id],callback);
         
        }
};
module.exports=faculty;