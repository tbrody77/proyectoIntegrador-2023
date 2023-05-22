//Requires
const bcrypt = require('bcryptjs');
const index = require('../db/index');
const db = require('../models');

db.Producto.findAll()
.then((resultados) => {

});

//Metodos
const productController={
   productAdd: function(req, res, next) {
      res.render('productAdd', { title: 'Add Product' });
    },
   index: function(req, res, next) {
    const productos = index.productos
    const comentarios = index.comentarios
    const filterProductoID = productos.filter(producto => producto.id == req.params.id);
       console.log(filterProductoID) 
    res.render('product', { producto: filterProductoID, comentarios});
      },
}



//Exportaciones
module.exports = productController;