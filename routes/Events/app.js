var express = require('express');
var app = express();

var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
})
app.get('/create', function(req, res) {
  res.render('create');
});

module.exports = app;