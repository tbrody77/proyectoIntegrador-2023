//Requires
//const bcryptjs = require('bcryptjs');
const bcryptjs = require("bcryptjs");
const bcrypt = require("bcryptjs/dist/bcrypt");
const { json } = require("express/lib/response");
const app = require("../app");
const db = require("../database/models");
const Usuario = db.Usuario;

//Metodos
const userController = {
  index: function (req, res, next) {
    res.render("user", { title: "User" });
  },
  login: function (req, res) {
    res.render("login", { title: "Login" });
  },
  register: function (req, res) {
    res.render("register", { title: "Register" });
  },
  profile: function (req, res) {
    const id = req.params.id;
    Usuario.findByPk(id, {
      include: [
        { as: "Productos", model: db.Producto, order: [["createdAt", "DESC"]] },
        "Comentarios",
      ],
    }).then((usuario) => {
      res.render("profile", { title: "Profile", usuario });
    });
  },
  profileEdit: function (req, res) {
    res.render("profile-edit", { title: "Profile Edit" });
  },

  store: (req, res) => {
    let errors = {};
    //metodo que almacena el usuario en la base de datos al enviar el formulario de registro

    if (req.body.usuario == "") {
      errors.message = "El campo usuario esta vacio.";
      res.locals.errors = errors;
      res.render("register");
    } else if (req.body.email == "") {
      errors.message = "El campo email esta vacio.";
      res.locals.errors = errors;
      res.render("register");
    } else if (req.body.password == "") {
      errors.message = "El campo password esta vacio.";
      res.locals.errors = errors;
      res.redirect("register");
    } else {
      console.table(req.body);
      let criterio = {
        where: [{ email: req.body.email }],
      };
      Usuario.findOne(criterio).then((data) => {
        console.log(data);
        if (data !== null) {
          //agregamos una propiedad y le asignamos el valor correspondiente
          errors.message = "El email ya existe!";
          //Asignamos a locals.error el objeto errors
          res.locals.errors = errors;
          //renderizamos la vista con el error
          res.render("register");
        } else {
          const usuario = {
            username: req.body.username,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password),
            dni: req.body.dni,
            fechanacimiento: req.body.fechanacimiento,
          };
          if (req.file){
            console.log('guardo imagen');
            usuario.foto = req.file.filename
          }else {
            usuario.foto = 'default-image.png'
          }

          Usuario.create(usuario)
            .then(() => {
              res.redirect("/user/login");
            })
            .catch((error) => console.log(error));
        }
      });
    }
  },
  autenticate: function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    let errors = {};
    console.log('login');
    db.Usuario.findOne({
      where: {
        email: email,
      },
    }).then(function (usuario) {
      if (!usuario) {
        console.log("usuario no encontrado");
        errors.message = "usuario no encontrado";
        res.locals.errors = errors;
        return res.render("login", { title: "Login" });
      }

      if (bcryptjs.compareSync(password, usuario.password)) {
        if (!req.session.usuario) {
          req.session.usuario = usuario
        }

        if (req.body.recordame === "checkbox") {
          res.cookie("sesión", JSON.stringify(usuario), {
            maxAge: 1000 * 60 * 5,
          });
        }
        return res.redirect("/");
      } else {
        errors.message = "password incorrecto";
        res.locals.errors = errors;
        return res.render("login", { title: "Login" });
      }
    });
  },

  logout: function (req, res) {
    if (req.session.usuario) {
      req.session.destroy();
      res.clearCookie("usuario");
    }
    res.redirect("/");
  },
};
// Exportaciones
module.exports = userController;
