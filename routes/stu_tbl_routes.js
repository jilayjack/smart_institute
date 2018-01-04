var express = require('express');
 var router = express.Router();
 var stu=require('../model/stu_tbl_model');
 router.get('/:id?',function(req,res,next){

  if(req.params.id)
  {
      stu.getstuById(req.params.id,function(err,rows){

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
  stu.getAllStu(function(err,rows){

      if(err){

              res.json(err);
      }
      else{

              res.json(rows);
      }
  });
  }
});
router.get('/:id/:pass',function(req,res,next){
  stu.getstulogin (req.params.id,req.params.pass,function(err,rows){
 
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
router.post('/',function(req,res,next){ 
    stu.addStu(req.body,function(err,count){
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
 
      stu.deleteStu(req.params.id,function(err,count){
       
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
       
      stu.updateStu(req.params.id,req.body,function(err,rows){
       
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