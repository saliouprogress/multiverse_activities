const router = require('express').Router();
const { Meal } = require('../../db/models/meal')
const { QueryTypes } = require('sequelize');
const {db} = require('../../db/index');
const { User } = require('../../db/models');

router.get('/:userId', async (req, res) => {
    // const user = JSON.parse(sessionStorage.getItem("user"));
    let id = req.params.userId
    let user = await User.findByPk(id)
    console.log('Here is your user', user)
    let meals = await user.getMeals({ order: [['date', 'DESC']]})
    console.log(meals)
    res.render('meals', {
        meals,
        user:{id: id} //Used for main.hbs to render nav bar
    })
    // res.send({meals})
});

module.exports = router;