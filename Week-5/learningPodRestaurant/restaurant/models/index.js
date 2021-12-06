const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {Item} = require('./Item')
const {Service} = require('./Service')


Restaurant.belongsToMany(Menu, { through: Service });
Menu.belongsToMany(Restaurant, { through: Service });
// Restaurant.hasMany(Menu, {as: 'menus', foreignKey: 'restaurant_id'})
// Menu.belongsTo(Restaurant, {foreignKey: 'restaurant_id'})

Menu.hasMany(Item, {as: 'items', foreignKey: 'menu_id'})
Item.belongsTo(Menu, {foreignKey: 'menu_id'})



module.exports = {
    Restaurant,
    Menu,
    Item,
    Service
}