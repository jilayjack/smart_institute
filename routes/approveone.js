var express = require('express');
 var router = express.Router();
 var course=require('../model/stu_tbl_model');

 router.post('/',function(req,res,next){ 
    course.approve(req.body,function(err,count){
      if(err)
      {
      res.json(err);
      }
      else{
      res.json(count);//or return count for 1 &amp;amp;amp; 0
      }
      });
     });
     module.exports=router;
