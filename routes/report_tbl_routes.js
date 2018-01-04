var express = require('express');
 var router = express.Router();
 var reports=require('../model/report_tbl_model');
 router.get('/:id?',function(req,res,next){

  if(req.params.id)
  {
      reports.getReportById(req.params.id,function(err,rows){

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
  reports.getAllReport(function(err,rows){

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
reports.addReport(req.body,function(err,count){
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
 
reports.deleteReport(req.params.id,function(err,count){
 
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
 
reports.updateReport(req.params.id,req.body,function(err,rows){
 
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