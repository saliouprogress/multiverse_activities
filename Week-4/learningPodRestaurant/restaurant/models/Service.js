const { db, DataTypes, Model } = require('../db');
const { Restaurant } = require('./Restaurant');
const { Menu } = require('./Menu');

class Service extends Model {}

Service.init({
    RestaurantId: {
        type: DataTypes.INTEGER,
        references: {
            model: Restaurant,
            key: 'id'
        }
    },
    MenuId: {
        type: DataTypes.INTEGER,
        references: {
            model: Menu,
            key: 'id'
        }
    }
},
{
    sequelize: db 
})

module.exports = { Service };
