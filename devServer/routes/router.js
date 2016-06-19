var express = require('express');
var router  = express.Router();

var request = require('request');
var list    = require('../../list.js');
var db      = require('../data/index.js');
var file    = require('../feature/fs.js');
var queryString = require('../feature/queryString.js');

var data = require('../data');

router.get('/home', (req, res, next) => {
  res.render('home');
});

router.get('/vedio', (req, res, next) => {
  res.render('vedio', { vedio : data.vedio });
});

router.get('/ppts', (req, res, next) => {
	var ppts = data.ppts.concat(data.ppts2);
	ppts = { ppts : ppts, };
  res.render('ppts', ppts);
});

router.get('/ppts2', (req, res, next) => {
	var ppts = { ppts : data.ppts3, };
  res.render('ppts2', ppts);
});


router.get('/flash', (req, res, next) => {
  res.render('flash');
});

router.get('/router', (req, res, next) => {
  res.render('router');
});

router.get('/:page', (req, res, next) => {
	console.log('use /:page');
  res.render(req.params.page.replace(/.html/, ''));
});



module.exports = router;
