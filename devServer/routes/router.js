var express = require('express');
var router  = express.Router();

var request = require('request');
var list    = require('../../list.js');
var db      = require('../data/index.js');
var file    = require('../feature/fs.js');
var queryString = require('../feature/queryString.js');

var data = require('../data');

router.get('/home_1', (req, res, next) => {
  res.render('home_1');
});

router.get('/vedio_1', (req, res, next) => {
  res.render('vedio', { vedio : data.vedio });
});


var ppts = data.ppts.concat(data.ppts2);
ppts = { ppts : ppts.concat(data.ppts3), };
console.log('ppts', ppts);

router.get('/ppts_1', (req, res, next) => {
  res.render('ppts', ppts);
});

router.get('/flash_1', (req, res, next) => {
  res.render('flash');
});

router.get('/router', (req, res, next) => {
  res.render('router');
});

// router.get('/:page', (req, res, next) => {
// 	console.log('use /:page');
//   res.render(req.params.page.replace(/.html/, ''));
// });



module.exports = router;
