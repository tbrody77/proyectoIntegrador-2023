//Requires
//const bcryptjs = require('bcryptjs');
const index = require('../db/index')
const db = require('../database/models');   


//Metodos
const indexController={
   index: function(req, res, next) {
    db.Producto.findAll({
        include: [{as: "Usuario", model: db.Usuario}], 
        order: [["createdAt", "DESC"]], 
        limit: 4, 
    })
    .then(productos => {
        res.render('index', { novedades: productos});
    })
        
    },
    
      
}

//Exportaciones
module.exports = indexController;