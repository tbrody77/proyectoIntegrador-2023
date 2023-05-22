//Requires
const bcrypt = require('bcryptjs');
const index = require('../db/index')

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

    ingresar: (req, res)=> {
      let encriptada= bcryptjs.hashSync('123', 12);
      let check= bcryptjs.compareSync(req.body.password, encriptada);
      res.render('profile', { title: 'Profile' });
    },
  }

  // Exportaciones
  module.exports = userController;
  