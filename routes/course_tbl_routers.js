var express = require('express');
 var router = express.Router();
 var course=require('../model/course_tbl_model');
 router.get('/:id?',function(req,res,next){

  if(req.params.id)
  {
      course.getCoursekById(req.params.id,function(err,rows){

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
  course.getAllCourse(function(err,rows){

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
  course.addCourse(req.body,function(err,count){
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
 
  course.deleteCourse(req.params.id,function(err,count){
   
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
   
  course.updateCourse(req.params.id,req.body,function(err,rows){
   
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