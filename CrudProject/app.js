var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var hbs=require('hbs')

var app = express();

// view engine setup
/* GET home page. */
const viewPath= path.join(__dirname)+'/views';
console.log("🚀 ~ file: app.js:16 ~ viewPath:", viewPath)
const publicPath=path.join(__dirname)+'/public';
const partialPath=path.join(__dirname)+'/views/layouts';
app.set('view engine','hbs');
app.set('views',viewPath);
app.use(express.static(publicPath));
hbs.registerPartials(partialPath);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
