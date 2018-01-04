var db=require('../dbconnection');
var news={
 
getAllNews:function(callback){
 
return db.query("Select * from news_tbl",callback);
 
},
addNews:function(t,callback){
    return db.query("Insert into news_tbl values(?,?,?,?)",[t.news_id,t.news_title,t.new_desc,t.news_img],callback);
    },
    deleteNews:function(id,callback){
     return db.query("delete from news_tbl where news_id=?",[id],callback);
    },
    deleteAll:function(item,callback){
        //console.log(item.length);
            var delarr=[];
                for(i=0;i<item.length;i++){
        
                  //  console.log(item[i].course_id);
                    delarr[i]=item[i].news_id;
                }
          //      console.log(this.delarr);
                return db.query("delete from news_tbl where news_id IN (?)",[delarr],callback);
                 },
     
    
    updateNews:function(id,t,callback){
     return db.query("update news_tbl set news_title=?,new_desc=?,news_img=? where news_id=?",[t.news_title,t.new_desc,t.news_img,id],callback);
    },
    getNewsById:function(id,callback){
           
       return db.query("select * from news_tbl where news_id=?",[id],callback);
         
        }
   
};
module.exports=news;