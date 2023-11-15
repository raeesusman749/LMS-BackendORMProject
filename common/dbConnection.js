const { Sequelize } = require('sequelize') ;
const config = require('../config') ;


const database = new Sequelize(config.db) ;

database.authenticate()
.then(() => console.log("DB SUCCESSFULLY CONNECTED FROM DBCONNECTION FILE"))
.catch((err) => console.log(err))

module.exports = database ;
