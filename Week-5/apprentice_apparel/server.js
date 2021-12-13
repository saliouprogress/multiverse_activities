const express = require('express');
const webpack = require('webpack');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);
const PORT = 3000;

const {sequelize} = require('./server/model');
const { Admin, Cart, Category, Item, User } = require("./server/model");
const seed = require('./server/seed/seed.js');
const {checkUser} = require('./src/middlewares/loginMiddleware')
// const {isAdmin} = require('./src/middlewares/adminMiddleware')

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//route displays homepage and store categories
app.get('/', async(req, res) => {
    let categories = await Category.findAll()
    res.json({categories})
})

//route to display one category
// app.get('/aa/:id', async(req, res) => {
//     id = req.params.id
//     let oneCategory = await Category.findByPk(id)
//     res.json({oneCategory})
// })

//route displays all women clothing
app.get('/womens', async(req,res) => {
    let womens = await Item.findAll({
        where: {
            categoryId: 1
        }
    })
    res.json({womens})
})

//route to display one items
app.get('/womens/:id', async(req, res) => {
    id = req.params.id
    let oneItem = await Item.findByPk(id)
    res.json(oneItem)
})

//route displays all mens clothing
app.get('/mens', async(req,res) => {
    let mens = await Item.findAll({
        where: {
            categoryId: 2
        }
    })
    res.json({mens})
})

//route to display one items
app.get('/mens/:id', async(req, res) => {
    id = req.params.id
    let oneItem = await Item.findByPk(id)
    res.json(oneItem)
})

//route displays all jewelry
app.get('/jewelry', async(req,res) => {
    let jewelry = await Item.findAll({
        where: {
            categoryId: 3
        }
    })
    res.json({jewelry})
})

//route to display one items
app.get('/jewelry/:id', async(req, res) => {
    id = req.params.id
    let oneItem = await Item.findByPk(id)
    res.json(oneItem)
})
//route displays all electronics
app.get('/electronics', async(req,res) => {
    let electronics = await Item.findAll({
        where: {
            categoryId: 4
        }
    })
    res.json({electronics})
})

app.get('/electronics/:id', async(req, res) => {
    id = req.params.id
    let oneItem = await Item.findByPk(id)
    res.json(oneItem)
})
//route checks if the user the valid
//if user exist, redirects to login page
// if user do not exist, creates a new user
app.post('/signup', async(req,res) => {
    let allUsers =  await User.findAll()
    let user= req.body
    let validUser = checkUser(user, allUsers)
    if(!validUser.email ) {
        let newUser = await User.create(req.body)
        validUser.User = newUser
        res.send({"newUser": validUser})
    }else {
        res.send({"existUser": validUser})
    } 
})
//route checks if user is valid then checks if user is an admin
// if user is an admin, redirect to admin page
//normal user is redirected to homepage
//if no user found, redirect to signup page
app.get('/login', async(req,res) => {
    let allUsers =  await User.findAll()
    let user= req.body
    let validUser = checkUser(user, allUsers)
    if(!validUser.email ) {
        res.send({"newUser": validUser})
    
    }else {
        res.send({"existUser": validUser})
    } 
})

// route for admin page
// The application should support an admin to add new items for sale, 
// change descriptions or removed items from sale
app.get('/adminView', async(req,res) => {
    let allItems= await Item.findAll()
    res.json({allItems})
})

app.get('/adminView/:id', async(req,res) => {
    let itemId = req.params.id
    let updatedItem = await Item.findByPk(itemId)
    // let updatedItem = await item.update(req.body)
    res.json(updatedItem)
})

// contacts route for the contacts and about information
app.post('/contactus', async(req,res) => {
    let { contactForm } = await req.body
    console.log(contactForm)
    res.send("Here is your information", contactForm)
})

// checkout route to pay or delete items in the cart.
app.get('/checkout/:id', async(req,res) => {
    let id = req.params.id
    let cart = await Cart.findAll({
        where: {
            userId: id
        }
    })
    let items = []
    for (let i = 0; i < cart.length; i++) {
        let item = await Item.findAll({
            where: {
                id: cart[i].ItemId
            }
        })
        items.push(item)
    }
    res.json({items})
})
// sale route to display all the items that are on sale 
app.get('/sale', async(req,res) => {
    let sales = await Item.findAll({
        where: {
            sale: 1
        }
    })
    res.json({sales})
})

//route to display all users 
app.get('/users', async(req,res) => {
    let users = await User.findAll()
    res.json({users})
})

// app.use('*', (req, res) => {
//     res.redirect('/');
// })

// route to update an item
app.put('/updateSubmit', async(req,res) => {
    let { updateForm } = await req.body
    console.log(updateForm)
    res.send("Here is your update", updateForm)
})

app.use('/aa', require('./server/api'));

app.listen(PORT, function() {
    console.log(`Listening to port: ${PORT}`);
});
