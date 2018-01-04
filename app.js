//import { request } from 'https';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var event = require('./routes/event_tbl_routes');
var feedback = require('./routes/feedback_tbl_routes');
var qs = require('./routes/qs_tbl_routes');
var ans = require('./routes/ans_tbl_routes');
var sub = require('./routes/subject_tbl_routes');
var course = require('./routes/course_tbl_routers');
var news = require('./routes/news_tbl_routes');
var gellary = require('./routes/gellary_tbl_routes');
var notes = require('./routes/notes_tbl_routes');
var users = require('./routes/users');
var stu = require('./routes/stu_tbl_routes');
var report = require('./routes/report_tbl_routes');
var admin = require('./routes/admin_tbl_routes');
var delcourse=require('./routes/delallcourse-routes');
var email=require('./routes/email-router');
var delstudent=require('./routes/deleallstu-routes');
var delgallary=require('./routes/delgallary-routes');
var delsubject=require('./routes/delsuject-routes');
var delevent=require('./routes/delallevent-routes');
var delnews=require('./routes/delallnewsfeed-routes');
var stulogin=require('./routes/stu-login-routes');
var approvestu=require('./routes/approvestu-routes');
var faculty = require('./routes/faculty_tbl_routes');
var courseStu=require('./routes/course_stu_routes');
var eventCou=require('./routes/event_course_routes');
var subcoufacu=require('./routes/sub_course_faculty_routes');
var delfaculty=require('./routes/delallfaculty');
var displayapprove=require('./routes/displayapprove-routes.js-routes');
var approve=require('./routes/approveone');
var cors = require('cors');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/event',event);
app.use('/feedback',feedback);
app.use('/question',qs);
app.use('/answer',ans);
app.use('/subject',sub);
app.use('/course',course);
app.use('/news',news);
app.use('/gellary',gellary);
app.use('/notes',notes);
app.use('/student',stu);
app.use('/report',report);
app.use('/admin',admin);
app.use('/delcourse',delcourse);
app.use('/delallstudent',delstudent);
app.use('/delallimg',delgallary);
app.use('/delallsubject',delsubject);
app.use('/delallevent',delevent);
app.use('/delallnewsfeed',delnews);
app.use('/emaildemo',email);
app.use('/stulogin',stulogin);
app.use('/approvestu',approvestu);
app.use('/course_stu',courseStu);
app.use('/event_course',eventCou);
app.use('/subject_course_faculty',subcoufacu);
app.use('/faculty',faculty);
app.use('/delallfaculty',delfaculty);
app.use('/displaystu',displayapprove);
app.use('/approve',approve);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
