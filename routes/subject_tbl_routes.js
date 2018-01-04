var express = require('express');
 var router = express.Router();
 var sub=require('../model/subject_tbl_model');
 router.get('/:id?',function(req,res,next){

  if(req.params.id)
  {
      sub.getsubById(req.params.id,function(err,rows){

              if(err){
                  res.json(err);
              }
              else{
                  res.json(rows);
              }
      });
  }
  else
  {
  sub.getAllSubject(function(err,rows){

      if(err){

              res.json(err);
      }
      else{

              res.json(rows);
      }
  });
  }
});
router.post('/',function(req,res,next){ 
  sub.addSub(req.body,function(err,count){
    if(err)
    {
    res.json(err);
    }
    else{
    res.json(req.body);//or return count for 1 &amp;amp;amp; 0
    }
    });
   });
   router.delete('/:id',function(req,res,next){
   
  sub.deleteSub(req.params.id,function(err,count){
   
  if(err)
    {
    res.json(err);
    }
    else
    {
    res.json(count);
    }
   
  });
   }); 
   router.put('/:id',function(req,res,next){
   
  sub.updateSub(req.params.id,req.body,function(err,rows){
   
  if(err)
    {
    res.json(err);
    }
    else
    {
    res.json(rows);
    }
    });
   });
module.exports=router;