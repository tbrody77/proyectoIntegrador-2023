//requerir modulo de express
var express = require('express');
var router = express.Router();
const indexController = require ('../controladores/indexController');

/* GET home page. */
router.get('/', indexController.index);
router.get('/searchResults', indexController.searchResults);


module.exports = router;
