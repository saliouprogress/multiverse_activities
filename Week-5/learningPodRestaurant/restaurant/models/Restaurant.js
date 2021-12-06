
const {db, DataTypes, Model} = require('../db')

//Restaurant table
class Restaurant extends Model {

}


Restaurant.init({
    name: DataTypes.STRING, 
    image: DataTypes.STRING,
},
{
    sequelize: db,
    timestamps: false, 
})

   


//export
module.exports = {Restaurant}