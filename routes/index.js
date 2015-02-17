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
  res.render('winterball', {title: 'Project X Winterball' })
})

router.get('/mentoring', function(req, res, next) {
  res.render('mentoring', {title: 'Project X Mentoring' })
});

module.exports = router;
