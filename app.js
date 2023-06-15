var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const sessioninview = require('./middleware/session');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var productRouter = require('./routes/product');
const session = require('express-session');
const persistirSesion = require('./middleware/persistirSesion')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', express.static('public')); //https://expressjs.com/es/starter/static-files.html
app.use(sessioninview);

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'secreto', 
  resave: false, 
  saveUninitialized: true,
  cookie: {}
}))
app.use("/public", express.static(__dirname + '/public'));
//app.use(express.static(path.join(__dirname, 'public')));

app.use(persistirSesion)
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);


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
