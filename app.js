var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// ProjectX public/private development
app.use(function(req, res, next) {
  res.locals.in_private = process.env.IN_PRIVATE;
  next();
});

var routes = require('./routes/index');
var fundraising = require('./routes/Fundraising/app');
var projects = require('./routes/Projects/app');
var technology = require('./routes/Technology/app');
var events = require('./routes/Events/app');
var upkeep = require('./routes/Upkeep/app');
var publicrelations = require('./routes/PublicRelations/app');
var winterball = require('./routes/WinterBall/app');
var mentoring = require('./routes/Mentoring/app');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/fundraising', fundraising);
app.use('/projects', projects);
app.use('/technology', technology);
app.use('/events', events);
app.use('/upkeep', upkeep);
app.use('/PublicRelations', publicrelations);
app.use('/winterball', winterball);
app.use('/mentoring', mentoring);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
