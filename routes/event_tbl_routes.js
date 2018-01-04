var express = require('express');
 var router = express.Router();
 var event=require('../model/event_tbl_model');
 router.get('/:id?',function(req,res,next){

  if(req.params.id)
  {
      event.getEventkById(req.params.id,function(err,rows){

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
 event.getAllEvent(function(err,rows){

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
event.addEvent(req.body,function(err,count){
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
 
event.deleteEvent(req.params.id,function(err,count){
 
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
 
event.updateEvent(req.params.id,req.body,function(err,rows){
 
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