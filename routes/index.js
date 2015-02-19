var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})

router.get('/about', function(req, res, next) {
  res.render('about', {title: 'About The Project X' })
})

router.get('/officers', function(req, res, next) {
  res.render('officers', {title: 'Project X Officers' })
})

router.get('/events', function(req, res, next) {
  res.render('events', {title: 'Project X Events' })
})

router.get('/fundraising', function(req, res, next) {
  res.render('fundraising', {title: 'Project X Fundraising' })
})

router.get('/pr', function(req, res, next) {
  res.render('about', {title: 'Project X Public Relations' })
})

router.get('/projects', function(req, res, next) {
  res.render('projects', {title: 'Project X Projects' })
})

router.get('/technology', function(req, res, next) {
  res.render('technology', {title: 'Project X Technology' })
})

router.get('/upkeep', function(req, res, next) {
  res.render('upkeep', {title: 'Project X Lab Upkeep' })
})

router.get('/winterball', function(req, res, next) {
  res.render('winterball', {title: 'Project X Winter Ball' })
})

router.get('/mentoring', function(req, res, next) {
  res.render('mentoring', {title: 'Project X Mentoring' })
})

router.get('/constitution', function(req, res, next) {
  res.render('constitution', {title: 'Project X Constitutiton' })
})

router.get('/sponsors', function(req, res, next) {
  res.render('sponsors', {title: 'Project X Sponsors' })
})

router.get('/labRules', function(req, res, next) {
  res.render('rules', {title: 'Project X Lab Rules' })
})

router.get('/admin', function(req, res, next) {
  //Route to login if not logged in
  res.render('admin', {title: 'Project X Administration' })
})

router.get('/login', function(req, res, next) {
  //route to home if logged in
  res.render('login', {title: 'Project X Lab Login' })
})

router.get('/admin/createEvent', function(req, res, next) {
  //require admin login
  res.render('createEvent', {title: 'Project X Event Creation' })
})

router.post('/admin/createEvent', function(req, res) {
  //require admin login
  res.send('send an event object to be processed')
})

router.put('/admin/editEvent', function (req, res) {
  //require admin login
  res.send('send an event object to be processed')
});

module.exports = router;
