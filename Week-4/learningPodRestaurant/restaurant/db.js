const {Sequelize, DataTypes, Model} = require('sequelize');


const db = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './restaurants2-seq.sqlite',
    logging: false 
})

//export
module.exports = {db, DataTypes, Model}