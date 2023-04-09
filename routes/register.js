var express = require('express');
var router = express.Router();
const registerController = require('../controladores/userController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

module.exports = router;

//se cambio de users a profile

