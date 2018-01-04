var express = require('express');
 var router = express.Router();
 var ans=require('../model/ans_tbl_model');
 router.get('/:id?',function(req,res,next){

  if(req.params.id)
  {
     ans.getAnskById(req.params.id,function(err,rows){

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
 ans.getAnskById(function(err,rows){

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
ans.addans(req.body,function(err,count){
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
  ans.deleteans(req.params.id,function(err,count){
 
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
 
ans.updateans(req.params.id,req.body,function(err,rows){
 
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