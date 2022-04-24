var express = require('express');
var router = express.Router();

/* GET pages. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'OverTalk', logo: 'OT' });
});

router.get('/inicio', function (req, res, next) {
  res.render('inicio', { title: 'OverTalk', logo: 'OT' });
});

router.get('/register', function (req, res, next) {
  res.render('register', { title: 'OverTalk', logo: 'OT' });
});

module.exports = router;
