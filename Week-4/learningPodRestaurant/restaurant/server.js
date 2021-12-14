const express = require('express');
const Handlebars = require('handlebars')
const {engine, expressHandlebars} = require('express-handlebars')
//const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const port = 3000;
const {sequelize} = require('./models');
const {Restaurant, Menu, Item, Service} = require('./models');
const Seed = require('./seedDB');

const app = express();

Seed();

// setup our templating engine
// const handlebars = expressHandlebars({
//     handlebars: allowInsecurePrototypeAccess(Handlebars)
// })
app.engine('handlebars', engine({
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
}));
//app.engine('handlebars', handlebars)
app.set('view engine', 'handlebars')

// support the parsing of incoming requests with urlencoded payloads (e.g. form POST)
app.use(express.urlencoded({ extended: true }));
// support the parsing of incoming requests with json payloads
app.use(express.json());

// serve static assets from the public/ folder
app.use(express.static('public'));

//this route returns HTML for all the restaurants
app.get('/restaurants', async (req, res) => {
    const restaurants = await Restaurant.findAll()
    res.render('restaurants', { restaurants })
})

app.post('/restaurants_create', async(req, res) => {
    await Restaurant.create(req.body);
    res.send('new restaurant created!')
})

app.post('/menu_create', async(req, res) => {
  await Menu.create(req.body);
  res.send('new menu created!')
})

app.get('/create_restaurant', (req, res) => {
  res.render('createRestaurant')
})

app.get('/create_menu', (req, res) => {
  res.render('createMenu')
})

// this route returns HTML for a single restaurant
app.get('/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id)
    res.render('restaurant', { restaurant })
})

// app.get('/restaurants/:id/menus', async (req, res) => {
//   const menus = await Restaurant.findByPk(req.params.id, {include: [{model: Menu,
//     through: {where: {RestaurantID: req.params.id}}}]})
//   res.json(menus)
//   // res.render('menus', { menus })
// })

app.get('/restaurants/:id/menus', async (req, res) => {
  const menus = await Restaurant.findByPk(req.params.id,
    {include: {all: true, nested: true}})
  // res.json(menus)
  res.render('menus', { menus })
})

app.get('/menus', async (req, res) => {
        let menus = await Menu.findAll()
        // res.json(menus)
        res.render('menus', {menus})
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:3000`)
})





// const express = require('express');
// const {Restaurant, Menu, Item} = require('./models/index');
// const seeFile = require('./seedDB');



// const app = express();
// const port = 3000;


// app.use(express.static('public'));
// app.use(express.json())

// seeFile()


// //post method
// app.post('/menus', async (req, res) => {
//     let newMenu = req.body
//     await Menu.create(newMenu)
//     res.send('new menu created!')
// })

// app.post('/restaurants', async (req, res) => {
//     let newRestaurant = req.body
//     await Restaurant.create(newRestaurant)
//     res.send('new restaurant created!')
// })


// //get method
// app.get('/now', (request, response) => {
//     const date = new Date();
//     response.send(date)
// })

// app.get('/flipcoin', (request, response) => {
//     let data = ['head', 'tails'];
//     let result = data[Math.floor(Math.random()*data.length)]
//     response.send(result)
// })

// app.get('/restaurants', async (req, res) => {
//     let restaurants = await Restaurant.findAll()
//     res.json({restaurants})
// })

// app.get('/menus', async (req, res) => {
//     let menus = await Menu.findAll()
//     res.json({menus})
// })

// app.get('/restaurants/:id', async (req, res) => {
//     let id = req.params.id;
//     let singleRestaurant = await Restaurant.findByPk(id, {
//         include: {model: Menu, as: 'menus'}
//     })
//     res.json({singleRestaurant})
// })

// app.get('/menus/:id', async (req, res) => {
//     let id = req.params.id;
//     let singleMenu = await Menu.findByPk(id, {
//         include: {model: Item, as: 'items'}
//     })
//     res.json({singleMenu})
// })



// app.listen(port, () => {
//     console.log(`Server listening at http://localhost:${port}`)
// })




// const {engine, expressHandlebars} = require('express-handlebars');

// app.engine('handlebars', engine({
//   runtimeOptions: {
//     allowProtoPropertiesByDefault: true,
//     allowProtoMethodsByDefault: true,
//   },
// }));