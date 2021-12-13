const path = require('path');
const fs = require('fs').promises;

// const {db} = require('../db')
// const {Admin} = require('../model/Admin')
// const {User} = require('../model/User')
// const {Category} = require('../model/Category')
// const {Item} = require('../model/Item')
// const {Cart} = require('../model/Cart')
// require('../model')

const { db, Admin, User, Category, Item, Cart } = require('../model');

const seed = async() => {
    await db.sync({force: true});

    const adminPath = path.join(__dirname, 'Admin.json');
    const userPath = path.join(__dirname, 'user.json');
    const categoryPath = path.join(__dirname, 'category.json');
    const itemPath = path.join(__dirname, 'item.json');
    const cartPath = path.join(__dirname, 'Cart.json');

    const adminBuffer = await fs.readFile(adminPath);
    const userBuffer = await fs.readFile(userPath);
    const categoryBuffer = await fs.readFile(categoryPath);
    const itemBuffer = await fs.readFile(itemPath);
    const cartBuffer = await fs.readFile(cartPath);

    const { admin } = JSON.parse(String(adminBuffer));
    const { users } = JSON.parse(String(userBuffer));
    const { category } = JSON.parse(String(categoryBuffer));
    const { items } = JSON.parse(String(itemBuffer));
    const { cart } = JSON.parse(String(cartBuffer));

    const adminPromises = admin.map(admin => Admin.create(admin));
    const userPromises = users.map(user => User.create(user));
    const categoryPromises = category.map(category => Category.create(category));
    const itemPromises = items.map(item => Item.create(item));
    
    await Promise.all(adminPromises);
    await Promise.all(userPromises);
    await Promise.all(categoryPromises);
    await Promise.all(itemPromises);

    const cartPromises = cart.map(carts => Cart.create(carts));
    await Promise.all(cartPromises);
   
    console.log('Data have been successfully added to our table');
}

seed();

module.exports = seed;
