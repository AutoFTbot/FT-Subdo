const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('wibudev', 'wibuuser', 'Mantapp123!', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;