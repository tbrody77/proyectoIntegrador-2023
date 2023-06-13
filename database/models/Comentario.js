const Producto = require('./Producto')
module.exports = function(sequelize, dataTypes) {
    let alias = "Comentario";

    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },

        comentario: {
            type: dataTypes.STRING
        },

        createdAt: {
            type: dataTypes.DATE
        },

        updatedAt: {
            type: dataTypes.DATE
        },
        
        usuarioId: {
            type: dataTypes.INTEGER
        },

        productoId: {
            type: dataTypes.INTEGER
        }

    }

//
let config = {
    tableName: 'comentarios', timestamps: true
}

const Comentario = sequelize.define(alias, cols, config);

Comentario.associate=function (models) {


Comentario.belongsTo(models.Producto)
Comentario.belongsTo(models.Usuario)
}


return Comentario

}
