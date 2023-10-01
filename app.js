/* 
   File Name: app.js
   Student's Name: Zhaoxing Chang
   Student ID: 301297266
   Date: September 30, 2023
*/
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const expressLayouts = require('express-ejs-layouts');
var app = express();
app.use(expressLayouts);

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Serve custom CSS file with proper Content-Type
app.get('/public/stylesheets/style.css', function(req, res) {
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(path.join(__dirname, 'public/stylesheets/style.css'));
});

// Serve static files with custom headers
app.use('/public', express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, path, stat) => {
    if (path.endsWith('.jpg')) {
      res.setHeader('Content-Type', 'image/jpg');
    }
  },
}));

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

app.listen(2000, () => {
  console.log('Server is running on port 2000');
});

module.exports = app;
