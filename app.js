let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let locationsRouter = require('./routes/api/locations');
let locationdicesRouter = require('./routes/api/locationdices');
let cardsRouter = require('./routes/api/cards');
let cardtypesRouter = require('./routes/api/cardtypes');
let characterRouter = require('./routes/api/characters');
let rolesRouter = require('./routes/api/roles');
let playersRouter = require('./routes/api/players');
let gamesRouter = require('./routes/api/games');

let api = '/api';

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use(api + '/locations', locationsRouter);
app.use(api + '/locationdices', locationdicesRouter);
app.use(api + '/cards', cardsRouter);
app.use(api + '/cardtypes', cardtypesRouter);
app.use(api + '/characters', characterRouter);
app.use(api + '/roles', rolesRouter);
app.use(api + '/players', playersRouter);
app.use(api + '/games', gamesRouter);

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
