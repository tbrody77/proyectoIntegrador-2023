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
      const id = req.params.id
      Usuario.findByPk(id, {include: [{as: 'Productos', model: db.Producto, order: [["createdAt", "DESC"]]}, 'Comentarios']})
      .then(usuario => {
        res.render('profile', { title: 'Profile', usuario });
      })
      
    },
    profileEdit: function(req, res, ) {
      res.render('profile-edit', { title: 'Profile Edit' });
    },

    store:(req,res) => {
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
                password: bcryptjs.hashSync //libreria para encriptar info x ej la contra, con hash lo paso a token
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



autenticate: function (req,res){
const email = req.body.email
const password = req.body.password
//req.locals.errors = {}
db.Usuario.findOne({ where: {
  email:email
}
})
.then(function(usuario){
  if (!usuario){
    res.locals.errors.mensaje = 'usuario no encontrado'
    return res.render('/login', {title: 'login'})
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
  console.log('password incorrecta')
  res.locals.errors.mensaje = 'password incorrecto'
    return res.render('/login', {title: 'login'})
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
