var express = require('express');
var router = express.Router();
const userController = require('../controladores/userController');

/* GET users listing. */
router.get('/register', userController.register);

module.exports = router;

//se cambio de users a profile

