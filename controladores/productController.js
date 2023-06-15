//Requires
//const bcryptjs = require('bcryptjs');
const db = require("../database/models");
const { searchResults } = require("./indexController");
const Op = db.Sequelize.Op;

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

  productForm: function (req, res, next) {
    res.render("productAdd", { title: "Add Product" });
  },

  productAdd: function (req, res, next) {
    const nombre = req.body.nombre
    const descripcion = req.body.descripcion
    const foto = req.file.filename
    console.log(foto)
    res.send(foto)
  },

  index: function (req, res, next) {
    const productos = [];

    res.render("product", { producto: filterProductoID, comentarios });
  },

  detalleProducto: function (req, res, next) {
    const id = req.params.id;
    db.Producto.findByPk(id, { include: [{ model: db.Comentario, as: 'Comentarios', include: ['Usuario'] }] })
      .then(function (producto) {

        console.log(producto.Comentarios);
        res.render("product", {
          producto,
        });
      });
  },
  buscar: function (req, res) {
    const consulta = req.query.consulta
    db.Producto.findAll(
      {
        where: {
          nombre: {
            [Op.like]: '%' + consulta + '%'
          }
        },
      })
      .then(productos => {
        res.render('search-results', {
          productos
        })
      })
  }

};

//Exportaciones
module.exports = productController;