var express = require('express');
var router = express.Router();
const extraController = require('../controladores/extraController');
/* GET users listing. */

router.get('/', extraController.productAdd);

module.exports = router;


//se cambio de users a profile

