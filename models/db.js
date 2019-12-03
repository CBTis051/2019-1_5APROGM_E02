const Sequelize = require('sequelize');

// Conexión a la BD con sequelize
const sequelize = new Sequelize('proyecto','root','Itzel02062000:', {
    host: 'al17058.systems',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database', err);
    });

    module.exports = sequelize;