//Requires
//const bcryptjs = require('bcryptjs');
const db = require("../database/models");
const Op = db.Sequelize.Op;

//Metodos
const productController = {
  
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
          [Op.or]: [
            { nombre: { [Op.like]: `%${consulta}%` } },
            { descripcion: { [Op.like]: `%${consulta}%` } }
          ]
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