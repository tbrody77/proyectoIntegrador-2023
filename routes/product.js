
var express = require('express');
var router = express.Router();
var productController = require ('../controladores/productController')
const uploads = require('../middleware/uploads')

/* GET users listing. */
router.get('/:id', productController.detalleProducto);
router.get('/productAdd', productController.productAdd);
router.get('/buscar', productController.buscar)
router.post('/add', uploads.uploadProduct.single('imagen'), productController.productAdd)
router.get('/add', productController.productForm)

  module.exports = router;