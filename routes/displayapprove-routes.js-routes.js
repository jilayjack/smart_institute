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
  stu.displaystu(function(err,rows){

      if(err){

              res.json(err);
      }
      else{

              res.json(rows);
      }
  });
  }
});
module.exports=router;