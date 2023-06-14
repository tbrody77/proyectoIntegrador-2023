const Usuario = require('./Usuario');

module.exports = function(sequelize, dataTypes) {
    let alias = "Producto";

    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },

        nombre: {
            type: dataTypes.STRING
        },

        descripcion: {
            type: dataTypes.STRING
        },

        foto: {
            type: dataTypes.STRING
        },
        
        createdAt: {
            type: dataTypes.DATE
        },

        updatedAt: {
            type: dataTypes.DATE
        },
        
        usuarioId: {
            type: dataTypes.INTEGER,
            
        },

    }
let config = {
    tableName: 'productos', timestamps: true
}

const Producto = sequelize.define(alias, cols, config);


Producto.associate=function (models) {
    Producto.belongsTo(models.Usuario) 
    Producto.hasMany(models.Comentario, {
        as: 'Comentarios',
        foreignKey: 'productoId'
    })
    
}

return Producto
} 