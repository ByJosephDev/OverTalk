var express = require('express');
var router = express.Router();
const Model = require('../models/userScheme');

/* GET pages. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'OverTalk', logo: 'OT' });
});

router.get('/inicio:_id', async (req, res, next) => {

  const _id = req.params._id

  const user = await Model.findById(_id)

  res.render('inicio', { title: 'OverTalk', logo: 'OT' , user: user });

});


router.get('/delete:_id', async (req, res, next) => {

  const _id = req.params._id

  const user = await Model.findById(_id)

  res.render('delete', { title: 'OverTalk', logo: 'OT' , user: user });

});

router.get('/update:_id', async (req, res, next) => {

  const _id = req.params._id

  const user = await Model.findById(_id)

  res.render('update', { title: 'OverTalk', logo: 'OT' , user: user });

});

router.get('/register', function (req, res, next) {
  res.render('register', { title: 'OverTalk', logo: 'OT' });
});

module.exports = router;
