var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('profile', { title: 'Profile' });
});

module.exports = router;

//se cambio de users a profile

