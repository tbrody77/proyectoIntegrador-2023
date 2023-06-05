//Requires
//const bcryptjs = require('bcryptjs');
const index = require('../db/index')
const db = require('../database/models');

db.Producto.findAll()
.then((resultados) => {

});

//Metodos
const productController={

//product: function (req, res){
//   db.Producto.findOne({
//      include: {
//         all: true,
//         nested: true
//      },
//      where: {id: req.params.id}
//   })
//   .then(Producto =>{
//      res.render('product', {producto:producto});
//   })
//},

//productAdd: function(req, res){
//   db.Producto.create({
//      UserId:req.session.usuario.id,
//      descripcion:req.body.product,
//      foto:req.file.filename
//   })
//.then(()=>{
//   res.redirect('/')
//})
//}

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