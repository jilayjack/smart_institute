var express = require('express');
 var router = express.Router();
 var admin=require('../model/admin_tbl_model');
 router.post('/',function(req,res,next){ 
  admin.getadmin(req.body,function(err,count){
    if(err)
    {
    res.json(err);
    }
    else{
    res.json(count);//or return count for 1 &amp;amp;amp; 0
    }
    });
   });
router.get('/',function(req,res,next){
  admin.getad(function(err,rows){
 
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