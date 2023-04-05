var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('headerLogueado', { title: 'Header Logueado' });
});

module.exports = router;

//se cambio de users a profile

