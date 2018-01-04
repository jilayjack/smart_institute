var express = require('express');
 var router = express.Router();
 var stu=require('../model/stu_tbl_model');

router.get('/',function(req,res,next){
    stu.coursestu(function(err,rows){
   
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