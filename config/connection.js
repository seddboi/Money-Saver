// simple sequelize connection made to DB
// not being utilized to test out teller-connect button feature page
const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);

module.exports = sequelize;