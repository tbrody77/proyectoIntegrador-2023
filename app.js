var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var profileRouter = require('./routes/profile');
var productRouter = require('./routes/product');
var searchResultsRouter = require('./routes/search-results')
var productAddRouter = require('./routes/product-add')
var profileEditRouter = require('./routes/profile-edit')
var registerRouter = require('./routes/register')
var loginRouter = require('./routes/login')
var headerLogueadoRouter = require('./routes/headerLogueado')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/public", express.static(__dirname + '/public'));
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/profile', profileRouter);
app.use('/product', productRouter);
app.use('/search-results', searchResultsRouter);
app.use('/product-add', productAddRouter)
app.use('/profile-edit', profileEditRouter)
app.use('/register', registerRouter)
app.use('/login', loginRouter)
app.use('/headerLogueado', headerLogueadoRouter)

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
