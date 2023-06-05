//Requires
//const bcryptjs = require('bcryptjs');
const db = require('../database/models');
const Usuario = db.Usuario;


//Metodos
const userController = {
    index: function(req, res, next) {
      res.render('user', { title: 'User' });
    },
    login: function(req, res) {
      res.render('login', { title: 'Login' });
    },
    register: function(req, res) {
      res.render('register', { title: 'Register' });
    },
    profile: function(req, res, ) {
      res.render('profile', { title: 'Profile' });
    },
    profileEdit: function(req, res, ) {
      res.render('profile-edit', { title: 'Profile Edit' });
    },

    add:function(req, res) {
      res.render('addUsuario');
    },

    store:(req,res) => {
      let errors = {};

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

        res.render("register");
        } else {
          let criterio = {
            where: [{ email: req.body.email }]
          }
          Usuario.findAll(criterio)
          .then(data => {
            //agregamos una propiedad y le asignamos el valor correspondiente
            errors.message = "El email ya existe!";
            //Asignamos a locals.error el objeto errors 
            res.locals.errors = errors;
            //renderizamos la vista con el error
            res.render("register");
          }).catch(error => console.log(error))

       //   let passEncriptada= bcryptjs.hashSync(req.body.password,12);
       //   let Usario = {
       //       name:req.body.name,
       //       email:req.body.email,
       //       password:passEncriptada
       //   }
          Usuario.create(Usuario);
          res.redirect('/usuario');
        }
    },

profile: function (req,res){
db.Usuario.findByPk(req.session.usuario.id, {

  include: {
  all: true,
  nested: true
} 
})
  .then((profile) => {
  res.render('profile', {profile: profile});
})
},


registrarUsuario: function(req,res) {
db.Usuario.create({
email: req.body.email,
usuario: req.body.usuario,
contraseña: req.body.contraseña,
foto: req.file.filename,
fecha: req.body.fecha,
dni: req.body.dni
})
.then(()=>res.redirect('user/login'))
.catch(error => console.log(error))
},



//   login: (req, res)=> {
//      let encriptada= bcryptjs.hashSync('123', 12);
//      let check= bcryptjs.compareSync(req.body.password, encriptada);
//      res.render('profile', { title: 'Profile' });
//    }
  }

  // Exportaciones
  module.exports = userController