var express = require('express');
 var router = express.Router();
 var eve=require('../model/event_tbl_model');

router.get('/',function(req,res,next){
    eve.eventCourse(function(err,rows){
   
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