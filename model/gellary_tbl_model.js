var db=require('../dbconnection');
var gellary={
 
getAllPics:function(callback){
 
return db.query("Select * from gallary_tbl",callback);
 
},
addPics:function(t,callback){
    return db.query("Insert into gallary_tbl values(?,?,?)",[t.pic_id,t.pic_title,t.pic_img],callback);
    },
    deletePics:function(id,callback){
     return db.query("delete from gallary_tbl where pic_id=?",[id],callback);
    },
    deleteAll:function(item,callback){
        //console.log(item.length);
            var delarr=[];
                for(i=0;i<item.length;i++){
        
                  //  console.log(item[i].course_id);
                    delarr[i]=item[i].pic_id;
                }
          //      console.log(this.delarr);
                return db.query("delete from gallary_tbl where pic_id IN (?)",[delarr],callback);
                 },
     
    updatePics:function(id,t,callback){
     return db.query("update gallary_tbl set pic_title=?,pic_img=? where pic_id=?",[t.pic_title,t.pic_img,id],callback);
    },
    getPicskById:function(id,callback){
           
       return db.query("select * from gallary_tbl where pic_id=?",[id],callback);
         
        }
    
   };
module.exports=gellary;