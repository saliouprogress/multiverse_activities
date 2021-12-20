const {db, DataTypes, Model} = require('../index');

class Type extends Model {
    
}

Type.init({
    name: DataTypes.STRING
},
{
    sequelize: db,
    timestamps: false, 
})

   
module.exports = {Type};