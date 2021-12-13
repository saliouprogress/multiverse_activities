const router = require('express').Router();
const { Item } = require('../model');

//route displays all women clothing
router.get('/womens', async(req,res) => {
    let womens = await Item.findAll({
        where: {
            categoryId: 1
        }
    })
    res.json({womens})
});

//route to display one items
router.get('/womens/:id', async(req, res) => {
    id = req.params.id
    let oneItem = await Item.findByPk(id)
    res.json({oneItem})
});

//route displays all mens clothing
router.get('/mens', async(req,res) => {
    let mens = await Item.findAll({
        where: {
            categoryId: 2
        }
    })
    res.json({mens})
});

//route to display one items
router.get('/mens/:id', async(req, res) => {
    id = req.params.id
    let oneItem = await Item.findByPk(id)
    res.json({oneItem})
});

//route displays all jewelry
router.get('/jewelry', async(req,res) => {
    let jewelry = await Item.findAll({
        where: {
            categoryId: 3
        }
    })
    res.json({jewelry})
});

//route to display one items
router.get('/jewelry/:id', async(req, res) => {
    id = req.params.id
    let oneItem = await Item.findByPk(id)
    res.json({oneItem})
});

//route displays all electronics
router.get('/electronics', async(req,res) => {
    let electronics = await Item.findAll({
        where: {
            categoryId: 4
        }
    })
    res.json({electronics})
});

//route to display one items
router.get('/electronics/:id', async(req, res) => {
    id = req.params.id
    let oneItem = await Item.findByPk(id)
    res.json({oneItem})
});

// sale route to display all the items that are on sale 
router.get('/sale', async(req,res) => {
    let saleItems = await Item.findAll({
        where: {
            sale: 1
        }
    })
    res.json({saleItems})
})

module.exports = router;
