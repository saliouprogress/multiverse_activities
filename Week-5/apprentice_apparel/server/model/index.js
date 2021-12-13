const { Admin } = require('./Admin');
const { Cart } = require('./Cart');
const { Category } = require('./Category');
const { Item } = require('./Item');
const { User } = require('./User');
const { db } = require('../db');

User.belongsToMany(Item, { through: Cart })
Item.belongsToMany(User, { through: Cart, })

Category.hasMany(Item, {as: 'items', foreignKey: 'categoryId'})
Item.belongsTo(Category, {foreignKey: 'categoryId'})

module.exports = {
    Admin,
    Cart,
    Category,
    Item,
    User,
    db
};
