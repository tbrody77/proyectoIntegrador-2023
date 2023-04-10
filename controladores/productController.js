//Requires
const index = require('../db/index')

//Metodos
const productController={
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