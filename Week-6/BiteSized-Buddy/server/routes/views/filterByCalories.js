const router = require('express').Router();
const {Meal} = require('../../db/models/meal')
const {User} = require('../../db/models/user')

router.post('/filter/calories/:userId', async (req, res) => {
    let calories = req.body.calories
    //need to update user to match logged in user
    let user = await User.findByPk(req.params.userId)
    let meals = await user.getMeals({ where: {
        calories: calories
    }})
    res.render('meals', {
        meals,
        user: {} //Used for main.hbs to render nav bar
    })
})

module.exports = router;