module.exports = function(sequelize, dataTypes) {
    let alias = "Usuario";

    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },

        email: {
            type: dataTypes.STRING
        },

        username: {
            type: dataTypes.STRING
        },

        foto: {
            type: dataTypes.STRING
        },

        password: {
            type: dataTypes.STRING
        },

        fechanacimiento: {
            type: dataTypes.DATE
        },

        dni: {
            type: dataTypes.INTEGER
        },

        createdAt: {
            type: dataTypes.DATE
        },

        updatedAt: {
            type: dataTypes.DATE
        }
    }
let config = {
    tableName: 'usuarios'
}
const Usuario = sequelize.define(alias, cols, config);

//Usuario.associate=function (models) {
//    Usuario.hasMany(models.Producto,{
//        as: 'producto',
//        foreignKey: 'userId'
//    });
//}
return Usuario

}
