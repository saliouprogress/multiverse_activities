const {db, DataTypes, Model} = require('../db')

//Item table
class Item extends Model {

}


Item.init({
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE
},
{
    sequelize: db 
})


//export
module.exports = {Item}