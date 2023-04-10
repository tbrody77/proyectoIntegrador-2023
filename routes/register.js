var express = require('express');
var router = express.Router();
<<<<<<< HEAD
const registerController = require('../controladores/userController')
=======
const userController = require('../controladores/userController');

>>>>>>> 91bef71c931c69af2177a4631f4a58a544793ff6
/* GET users listing. */
router.get('/register', userController.register);

module.exports = router;

//se cambio de users a profile

