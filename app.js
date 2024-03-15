var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//oprettelse af routes via stien til filerne i routes mappen
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var elslugere1Router = require('./routes/elslugere1');
var elslugere2Router = require('./routes/elslugere2');
var opretelslugerRouter = require('./routes/opretelsluger');
var elpriser1Router = require('./routes/elpriser1');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//her fortæller vi express serveren at den skal bruge de routes vi har oprettet
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use ('/elslugere1', elslugere1Router);
app.use ('/elslugere2', elslugere2Router);
app.use ('/opretelsluger', opretelslugerRouter);
app.use ('/elpriser1', elpriser1Router);

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
