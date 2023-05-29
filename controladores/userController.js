//Requires
const bcryptjs = require('bcryptjs');
const index = require('../database/models');
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

    store:(req,res)=>{
      let passEncriptada= bcryptjs.hashSync(req.body.password,12);
      let Usario = {
          name:req.body.name,
          email:req.body.email,
          password:passEncriptada
      }
      Usuario.create(Usuario);
      res.redirect('/usuario');
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



   login: (req, res)=> {
      let encriptada= bcryptjs.hashSync('123', 12);
      let check= bcryptjs.compareSync(req.body.password, encriptada);
      res.render('profile', { title: 'Profile' });
    }
  }

  // Exportaciones
  module.exports = userController