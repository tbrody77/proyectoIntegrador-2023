
var express = require('express');
var router = express.Router();
var productController = require ('../controladores/productController')
const multer = require("multer");
const path = require("path");

// Como se guarda el archivo
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,  path.join(__dirname,'../public','images', 'products'))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
// le dice que el sistema de upload use storage
const uploadProduct = multer({
  storage: storage
});

/* GET users listing. */
router.get('/add', productController.productForm)
router.post('/add', uploadProduct.single('imagen'), productController.productAdd)
router.get('/buscar', productController.buscar)
router.get('/:id', productController.detalleProducto);

  module.exports = router;