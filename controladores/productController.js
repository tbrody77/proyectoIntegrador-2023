//Requires
const bcryptjs = require('bcryptjs');
const db = require('../database/models');

db.Producto.findAll()
.then((resultados) => {

});

//Metodos
const productController={
   productAdd: function(req, res, next) {
      res.render('productAdd', { title: 'Add Product' });
    },
   index: function(req, res, next) {
    const productos = []
    
    
    res.render('product', { producto: filterProductoID, comentarios});
      }, 
      detalleProducto : function(req,res,next){
         const id = req.params.id
         db.Producto.findByPk(id,{includes:'Comentario'})
         .then(function(producto){
            console.log(producto);
            const comentarios = producto.getComentarios()
            res.render('product',{
            producto, comentarios}
            )
         })
         
      }
}

//Exportaciones
module.exports = productController;