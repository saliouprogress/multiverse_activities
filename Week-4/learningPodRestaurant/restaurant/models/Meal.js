const { db, DataTypes, Model } = require('../db');
const { Menu } = require('./Menu');
const { Item } = require('./Item');

class Meal extends Model {}

Meal.init({
    MenuId: {
        type: DataTypes.INTEGER,
        references: {
            model: Menu,
            key: 'id'
        }
    },
    ItemId: {
        type: DataTypes.INTEGER,
        references: {
            model: Item,
            key: 'id'
        }
    }
},
{
    sequelize: db 
})

module.exports = { Meal };