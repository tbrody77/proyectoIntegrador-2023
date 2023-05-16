//Requires
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
  }
  
  
  // Exportaciones
  module.exports = userController;
  