var express = require('express');
var router = express.Router();
const userController = require('../controladores/userController');

/* GET users listing. */
router.post('/register', userController.store);
router.get('/register', userController.register)

router.get('/profileEdit', userController.profileEdit);
router.get('/logout', userController.logout);

router.get('/login', userController.login);
router.post('/login', userController.autenticate)
router.get('/profile/:id', userController.profile);


module.exports = router;
