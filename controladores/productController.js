//Requires
//const bcryptjs = require('bcryptjs');
const db = require("../database/models");
const Op = db.Sequelize.Op;

//Metodos
const productController = {

  soloPropietario: function(req, res, next) {
    if(req.session.usuario) {
        productId = req.params.id;
        db.Producto.findByPk(productId)
            .then(function(producto) {
                if(producto == null) {
                    return res.redirect('/');
                }else {
                    if(producto.usuarioId == req.session.usuario.id) {
                        next();
                    }else {
                        console.log('no es propietario');
                        return res.redirect('/');
                    }
                }
            })
    }else {
        console.log('No hay usuario logueado');
        return res.redirect('/');
    }
},


  productForm: function (req, res, next) {
    res.render("productAdd", { title: "Add Product" });
  },

  productAdd: function (req, res, next) {
    let foto
    if(req.file) {
      foto = req.file.filename
    }else {
      foto = 'default-image.png'
    }

    
    if(req.session.usuario){
      const product = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        foto: foto,
        usuarioId: req.session.usuario.id
      }
      db.Producto.create(product)
      .then(function (producto) {
        res.redirect("/");
      })
      .catch(function (error) {
        console.log(error);
        res.send(error);
      })
    }

  },

  editarProducto: function (req, res, next) {
    const id = req.params.id;
    db.Producto.findByPk(id)
      .then(function (producto) {
        if(producto == null) {
          return res.redirect('/')
        }else {
          return res.render('productEdit', {producto})
        }
      })
  },

  update: function (req, res) {
    const id = req.params.id;
    let foto
    if(req.file) {
      foto = req.file.filename
    }else {
      foto = 'default-image.png'
    }

    const product = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      foto: foto,
      usuarioId: req.session.usuario.id
    }

    db.Producto.update(product, {
      where: {
        id: id
      }})
      .then(function (producto) {
        res.redirect("/");
      })
    },

  index: function (req, res, next) {
    const productos = [];

    res.render("product", { producto: filterProductoID, comentarios });
  },

  detalleProducto: function (req, res, next) {
    const id = req.params.id;
    db.Producto.findByPk(id, { include: [{ model: db.Comentario, as: 'Comentarios', include: ['Usuario'] }] })
      .then(function (producto) {
        console.log(producto);
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
            { nombre: { [Op.like]: '%' + consulta + '%' } },
            { descripcion: { [Op.like]: '%' +consulta + '%' } }
          ]
        },
      })
      .then(productos => {
        res.render('search-results', {
          productos
        })
      })
  },
  addComment: function (req, res) {
    if(req.session.usuario) {
      const comentario = {
        comentario: req.body.comentario,
        usuarioId: req.session.usuario.id,
        productoId: req.params.id
      }
      db.Comentario.create(comentario)
        .then(function (comentario) {
          res.redirect('/product/' + req.params.id)
        })
      }else {
        res.redirect('/')
      }
    },
    delete: function (req, res) {
      console.log(
        'eliminar'
      );
      const id = req.params.id;
      db.Producto.findByPk(id)
        .then(function (producto) {
          if(producto){
            db.Comentario.destroy({
              where: {
                productoId: id
              }
            })
            .then(function () {
              db.Producto.destroy({
                where: {
                  id: id
                }
              })
              .then(function () {
                res.redirect('/')
              })
            })
          }else {
            res.redirect('/')
          }
        })
    }
};

//Exportaciones
module.exports = productController;