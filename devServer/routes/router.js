var express = require('express');
var router  = express.Router();

var request = require('request');
var list    = require('../../list.js');
var db      = require('../data/index.js');
var file    = require('../feature/fs.js');
var queryString = require('../feature/queryString.js');

var data = require('../data');

// console.log('data', data.vedio);

router.get('/vedio', (req, res, next) => {
  res.render('vedio', { vedio : data.vedio });
});


var ppts = data.ppts.concat(data.ppts2);
ppts = { ppts : ppts.concat(data.ppts3), };

router.get('/ppts', (req, res, next) => {
  res.render('ppts', ppts);
});

router.get('/flash', (req, res, next) => {
  res.render('flash');
});

router.get('/:page', (req, res, next) => {
	console.log('use /:page');
  res.render(req.params.page.replace(/.html/, ''));
});



module.exports = router;
