var express = require('express');
 var router = express.Router();
 var sub=require('../model/subject_tbl_model');

router.get('/',function(req,res,next){
    sub.subCourseFaculty(function(err,rows){
   
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