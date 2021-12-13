const router = require('express').Router();
const { User, Item } = require('../model');

//route to display all users 
router.get('/users', async(req,res) => {
    let users = await User.findAll()
    res.json({users})
})

// route for admin page
// The application should support an admin to add new items for sale, 
// change descriptions or removed items from sale
router.get('/adminView', async(req,res) => {
    let allItems= await Item.findAll()
    res.json({allItems})
})

router.get('/adminView/:id', async(req,res) => {
    let itemId = req.params.id
    let updatedItem = await Item.findByPk(itemId)
    // let updatedItem = await item.update(req.body)
    res.json(updatedItem)
})

router.put('/updateSubmit', async(req,res) => {
    // let { updateForm } = await req.body
    // console.log(updateForm)
    // res.send("Here is your update", updateForm)
    let id = items.id 
    let itemToUpdate = Item.findByPk(id)
    let updatedItem = itemToUpdate.update(req.body)
    res.json({updatedItem})
})

module.exports = router;
