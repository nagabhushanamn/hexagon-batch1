var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var os = require('os');

// console.log(os.cpus().length);


let config = null;
// console.dir(process.env.NODE_ENV);

// if (process.env.NODE_ENV === 'prod') {
//   config = require('./config/prod.json');
// }

// if (process.env.NODE_ENV === 'dev') {
config = require('./config/prod.json');
// }

mongoose.connect(config.DB_URI, function () {
  console.log('connected with mongodb');
});


var todos = require('./routes/todos');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/todos', todos);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // res.status(err.status || 500);
  // res.render('error');
  res.send(err);
});


// app.listen('3000', function () {
//   console.log('running..');
// });

module.exports = app;
