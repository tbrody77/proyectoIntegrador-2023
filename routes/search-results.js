var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('search-results', { title: 'Search Results' });
});

module.exports = router;

//se cambio de users a profile

