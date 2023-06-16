
var express = require('express');
var router = express.Router();
var productController = require ('../controladores/productController')
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images'))
    },
    filename: function (req, file, cb) {
        console.log(file);
      const uniqueSuffix = Date.now() + '.' + file.originalname.split('.')[1]
      cb(null,'imagen-' + uniqueSuffix)
    }
  })

  const upload = multer({ storage: storage })

/* GET users listing. */
router.post('/delete/:id', productController.soloPropietario, productController.delete)
router.get('/add', productController.productForm)
router.post('/add', upload.single('imagen'), productController.productAdd)
router.get('/buscar', productController.buscar)
router.get('/edit/:id', productController.soloPropietario, productController.editarProducto);
router.post('/edit/:id', productController.soloPropietario, upload.single('imagen'), productController.update);
router.post('/:id/comment/add', productController.addComment)
router.get('/:id', productController.detalleProducto);

module.exports = router;