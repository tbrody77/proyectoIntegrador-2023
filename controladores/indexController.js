//Requires
const bcrypt = require('bcryptjs');
const index = require('../db/index')

//Metodos
const indexController={
   index: function(req, res, next) {
    
    let count=0;
    let count2=0;
    const productos = index.productos
    const filterNovedades = productos.filter((producto) => {
        if (count < 4 && producto.categoria == "novedades") {
            count++;
            return true;
            }
            return false;
        });
    const filterMasComentados = productos.filter((producto) => {
            if (count2 < 4 && producto.categoria == "mas comentados") {
                count2++;
                return true;
                }
                return false;
            });
        res.render('index', { novedades: filterNovedades, masComentados: filterMasComentados});
    },
    searchResults: function(req, res, next) {
        res.render('search-results', { title: 'Search Results' });
      },
      
}

//Exportaciones
module.exports = indexController;