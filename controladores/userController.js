//Requires
//const bcryptjs = require('bcryptjs');
const bcryptjs = require('bcryptjs');
const bcrypt = require('bcryptjs/dist/bcrypt');
const { json } = require('express/lib/response');
const app = require('../app');
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

        res.redirect("register");
        } else {
          let criterio = {
            where: [{ email: req.body.email }]
          }
          Usuario.findOne(criterio)
          .then(data => {
            if (data === null){
                //agregamos una propiedad y le asignamos el valor correspondiente
            errors.message = "El email ya existe!";
            //Asignamos a locals.error el objeto errors 
            res.locals.errors = errors;
            //renderizamos la vista con el error
            res.render("register");
            } 
            else{ 
              const usuario = {
                username: req.body.username, 
                email: req.body.email,
                password: bcryptjs.hashSync
                (req.body.password),
                foto: req.body.foto,
                dni: req.body.dni,
                fechanacimiento: req.body.fechanacimiento,
              }
              Usuario.create(usuario)
             .then( usuario => {res.redirect('/login')})
            }

       //   let passEncriptada= bcryptjs.hashSync(req.body.password,12);
       //   let Usario = {
       //       name:req.body.name,
       //       email:req.body.email,
       //       password:passEncriptada
       //   }
          
        })}
    },

profile: function (req,res){
db.Usuario.findByPk(req.session.userId, {

  include: {
  all: true,
  nested: true
} 
})
  .then((profile) => {
  res.render('profile', {profile: profile});
})
},

autenticate: function (req,res){
const email = req.body.email
const password = req.body.password
db.Usuario.findOne({
  email:email
})
.then(function(usuario){
  if (usuario === null){
    return res.redirect('/login?error=usuarioNoEncontrado')
  }
if (bcryptjs.compareSync(password, usuario.password)){
  req.session.usuario = usuario
  app.locals = usuario
  console.log(req.body.recordame)
  if (req.body.recordame === "checkbox"){
    res.cookie('sesión', JSON.stringify(usuario), { maxAge: 1000 * 60 * 5 });
  }
  return res.redirect('/')
}  
else{ 
  return res.redirect('/login?error=usuarioNoEncontrado')
}
})
},

logout: function(req,res){
  if (req.session.usuario){
    req.session.destroy()
    res.clearCookie('usuario');
  }
  res.redirect('/')
}
}
  // Exportaciones
  module.exports = userController
