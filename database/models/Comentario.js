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
        
        userId: {
            type: dataTypes.INTEGER
        },

        productoId: {
            type: dataTypes.INTEGER
        },

    }
let config = {
    tableName: 'comentarios'
}


const Comentario = sequelize.define(alias, cols, config);

Comentario.associate=function (models) {

    Comentario.belongsToMany(models.Usuario,{
    as: 'Usuario',
    foreingKey: 'UserId'
}),

    Comentario.belongsToMany(models.Producto,{
    as: 'Producto',
    foreingKey: 'productoId'
})
}


}