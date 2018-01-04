var db=require('../dbconnection');
var stu={
 
getAllStu:function(callback){
 
    //console.log('aama aayu');
return db.query("Select * from stu_tbl",callback);
 
},
getapprovestu:function(callback){
    return db.query("Select * from stu_tbl where flag=0",callback);

},
getstulogin:function(t,callback){
 
    //console.log('aama aayu');
   // return db.query("Select * from admin_tbl where admin_email_id=? and pass=?",[t.admin_email_id,t.pass],callback);

return db.query("Select * from stu_tbl where stu_email_id=? and pass=?",[t.stu_email_id,t.pass],callback);
 
},
addStu:function(t,callback){
 return db.query("Insert into stu_tbl values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[t.stu_id,t.stu_email_id,t.pass,t.f_name,t.m_name,t.l_name,t.gen,t.addhar_no,t.address,t.m_no,t.qualification,t.img,t.dob,t.flag,t.fk_course_id],callback);
 },
 deleteStu:function(id,callback){
    
  return db.query("delete from stu_tbl where stu_id=?",[id],callback);
 },
 deleteAll:function(item,callback){
    //console.log(item.length);
        var delarr=[];
            for(i=0;i<item.length;i++){
    
              //  console.log(item[i].course_id);
                delarr[i]=item[i].stu_id;
            }
      //      console.log(this.delarr);
            return db.query("delete from stu_tbl where stu_id IN (?)",[delarr],callback);
             },
   
 approveAll:function(item,callback){
    console.log(item.length);
        var delarr=[];
            for(i=0;i<item.length;i++){
    
              //  console.log(item[i].course_id);
                delarr[i]=item[i].stu_id;
            }
      //      console.log(this.delarr);
            return db.query("update stu_tbl set flag=1 where stu_id IN (?)",[delarr],callback);
             },
     
             approve:function(item,t,callback){
                        return db.query("update stu_tbl set flag=1 where stu_id=? ",[t.flag],callback);
                         },
                 
 updateStu:function(id,t,callback){
  return db.query("update stu_tbl set stu_email_id=?,pass=?,f_name=?,m_name=?,l_name=?,gen=?,addhar_no=?,address=?,m_no=?,qualification=?,img=?,dob=?,flag=?,fk_course_id=? where stu_id=?",[t.stu_email_id,t.pass,t.f_name,t.m_name,t.l_name,t.gen,t.addhar_no,t.address,t.m_no,t.qualification,t.img,t.dob,t.flag,t.fk_course_id,id],callback);
 },
 getstuById:function(id,callback){
        
    return db.query("select * from stu_tbl where stu_id=?",[id],callback);
      
     },
     coursestu:function(callback)
     {
         return db.query("select s.*,c.* from stu_tbl s,course_tbl c where s.fk_course_id=c.course_id and flag=1",callback);
     },
  

     displaystu:function(callback)
     {
         return db.query("select s.*,c.* from stu_tbl s,course_tbl c where s.fk_course_id=c.course_id and flag=0",callback);
     }
  
};
module.exports=stu;
