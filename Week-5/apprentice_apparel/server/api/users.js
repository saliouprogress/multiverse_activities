const router = require('express').Router();
const { User, Item, Cart } = require('../model');

// checkout route to pay or delete items in the cart.
router.get('/:id/cart', async(req,res) => {
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
});

router.delete('/:id/cart/:itemId', async(req,res) => {
    try {
        const { id, itemId } = req.params;
        const deleteItem = await Cart.destroy({
            where: { UserId: id, ItemId: itemId }});
        res.json(deleteItem);
    } catch (error) {
        console.error(error);
    }
});

router.delete('/:id/cart', async(req,res) => {
    try {
        const { id } = req.params;
        const deleteCart = await Cart.destroy({where: { UserId: id }});
        res.json(deleteCart);
    } catch (error) {
        console.error(error);
    }
});

// contacts route for the contacts and about information
router.post('/contactus', async(req,res) => {
    let { contactForm } = await req.body
    console.log(contactForm)
    res.send(contactForm)
});

//route checks if the user the valid
//if user exist, redirects to login page
// if user do not exist, creates a new user
router.post('/signup', async(req,res) => {
    let allUsers =  await User.findAll()
    let user= req.body
    let validUser = checkUser(user, allUsers)
    if(!validUser ) {
        let newUser = await User.create(req.body)
        res.send({"newUser": newUser})
    }else {
        let existUser = await User.findAll({
            where: {
                email: user.email
            }
        })
        console.log(existUser)
        res.send({"existUser": existUser})
    } 
});

//route checks if user is valid then checks if user is an admin
// if user is an admin, redirect to admin page
//normal user is redirected to homepage
//if no user found, redirect to signup page
router.post('/login', async(req,res) => {
    let allUsers =  await User.findAll()
    let user= req.body
    let validUser = await checkUser(user, allUsers)


    if(validUser) {
        let validAdmin = await isAdmin(user)
        if(validAdmin) {
            console.log('You have admin permissions')
            res.redirect('/aa/admin')
        }else {
         res.redirect('/aa')
        } 
    }
   
    else {
    //     //res.redirect('/aa/signup')
    //     router.post('/aa/newlogin', async(req,res) => {
    //         let newUser = await User.create(req.body)
    //         let allUsers =  await User.findAll()
    //         console.log({allUsers})
    //     }) 
    //console.log('You do not have an account. Please sign up.')
    }   
})

module.exports = router;
