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
        
        userId: {
            type: dataTypes.INTEGER
        },

    }
let config = {
    tableName: 'productos', timestamps: true
}

const Producto = sequelize.define(alias, cols, config);
Producto.associate=function (models) {
    Producto.hasMany(models.Comentario,{
        as: 'Comentario',
        foreingKey: 'producoId'
        }),
    
Producto.belongsTo(models.Usuario,{
    as: 'productosUsuario',
    foreingKey: 'UserId'
        })
    }

return Producto
}