
var express = require('express');
var router = express.Router();
var productController = require ('../controladores/productController')

/* GET users listing. */
router.get('/:id', productController.detalleProducto);
router.get('/productAdd', productController.productAdd);


  module.exports = router;