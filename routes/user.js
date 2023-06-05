var express = require('express');
var router = express.Router();
const userController = require('../controladores/userController');

/* GET users listing. */
router.get('/register', userController.store);
router.get('/profileEdit', userController.profileEdit);
router.get('/login', userController.login);
router.get('/profile', userController.profile);


module.exports = router;
