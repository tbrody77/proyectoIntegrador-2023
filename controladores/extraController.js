//Requires
const index = require('../db/index')

// Métodos
const extraController = {
  profileEdit: function(req, res, ) {
    res.render('profile-edit', { title: 'Profile Edit' });
  },
  productAdd: function(req, res, next) {
    res.render('product-add', { title: 'Add Product' });
  },
  searchResults: function(req, res, next) {
    res.render('search-results', { title: 'Search Results' });
  }
}

// Exportaciones
module.exports = extraController;
