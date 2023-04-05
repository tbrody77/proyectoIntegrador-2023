var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('profile-edit', { title: 'Profile Edit' });
});

module.exports = router;

//se cambio de users a profile

