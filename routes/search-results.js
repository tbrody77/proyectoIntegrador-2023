var express = require('express');
var router = express.Router();
const extraController = require('../controladores/extraController');

/* GET users listing. */

router.get('/', extraController.searchResults);

module.exports = router;

//se cambio de users a profile

