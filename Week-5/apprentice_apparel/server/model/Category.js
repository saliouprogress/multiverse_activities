
const { db, DataTypes, Model } = require('../db');

//Category table
class Category extends Model {}

Category.init({
    name: DataTypes.STRING, 
    image: DataTypes.STRING
},
{
    sequelize: db,
    timestamps: false, 
})

   
module.exports = { Category };
