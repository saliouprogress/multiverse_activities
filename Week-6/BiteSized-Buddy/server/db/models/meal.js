const {db, DataTypes, Model} = require('../index');

class Meal extends Model {
    
}

Meal.init({
    name: DataTypes.STRING, 
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    calories: DataTypes.INTEGER,
    type: DataTypes.STRING
},
{
    sequelize: db,
    timestamps: false, 
})


   
module.exports = {Meal};