const { db, DataTypes, Model } = require('../db');
const { User } = require('./User');
const { Item } = require('./Item');

class Cart extends Model {}

Cart.init({

    // UserId: DataTypes.INTEGER,
    // ItemId: DataTypes.INTEGER
    UserId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    ItemId: {
        type: DataTypes.INTEGER,
        references: {
            model: Item,
            key: 'id'
        }
    },
    // Total: DataTypes.INTEGER
},
{
    sequelize: db,
    timestamps: false,
})

module.exports = { Cart };
