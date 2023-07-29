var dotenv = require('dotenv');
var Sequelize = require('sequelize');
const path = require('path');

dotenv.config();

const databaseMysql= new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PORT,
    process.env.MYSQL_PASSWORD,
    process.env.MYSQL_HOST,
    process.env.MYSQL_DIALECT
    // {
    //     host:
    //     dialect:process.env.MYSQL_DIALECT
    // }
);


module.exports = databaseMysql;