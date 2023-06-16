//sequelize config file 
module.exports = {
    development: {
        host: 'localhost',
        dialect: 'mysql',
     //   password: 'root',
        database: 'proyectoIntegrador',
        username: 'root',
        port: 3306,
        logging:false,
    },
    test: {
    },
    production: {
    }
}
