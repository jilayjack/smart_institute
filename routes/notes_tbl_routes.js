var express = require('express');
 var router = express.Router();
 var notes=require('../model/notes_tbl_model');
 router.get('/:id?',function(req,res,next){

  if(req.params.id)
  {
      notes.getnotesById(req.params.id,function(err,rows){

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
 notes.getAllNotes(function(err,rows){

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
  notes.addNotes(req.body,function(err,count){
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
   
  notes.deleteNotes(req.params.id,function(err,count){
   
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
   
  notes.updateNotes(req.params.id,req.body,function(err,rows){
   
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