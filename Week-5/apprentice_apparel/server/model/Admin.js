const { db, DataTypes, Model } = require('../db');

class Admin extends Model {}

Admin.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING
},
{
    sequelize: db,
    timestamps: false, 
})

module.exports = { Admin };
