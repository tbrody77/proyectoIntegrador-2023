var express = require('express');
var router = express.Router();
const extraController = require('../controladores/extraController');
/* GET users listing. */
router.get('/', extraController.profileEdit);

module.exports = router;

//se cambio de users a profile

