//Requires
//const bcryptjs = require('bcryptjs');
const index = require("../db/index");
const db = require("../database/models");

//Metodos
const productController = {
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

  productAdd: function (req, res, next) {
    res.render("productAdd", { title: "Add Product" });
  },

  index: function (req, res, next) {
    const productos = [];

    res.render("product", { producto: filterProductoID, comentarios });
  },

  detalleProducto: function (req, res, next) {
    const id = req.params.id;
    db.Producto.findByPk(id, { include: [{model:db.Comentario, as: 'Comentarios', include: ['Usuario']}] })
    .then(function (producto) {

      console.log(producto.Comentarios);
      res.render("product", {producto,
      });
    });
  },
};

//Exportaciones
module.exports = productController;