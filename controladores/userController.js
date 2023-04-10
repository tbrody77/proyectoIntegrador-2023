//Requires
const index = require('../db/index')

//Metodos
const userController = {
    index: function(req, res, next) {
      res.render('user', { title: 'User' });
    },
    login: function(req, res,) {
      res.render('login', { title: 'Login' });
    },
    register: function(req, res,) {
      res.render('register', { title: 'Register' });
    }
  }
  
  
  // Exportaciones
  module.exports = userController;
  