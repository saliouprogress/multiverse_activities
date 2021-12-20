const router = require('express').Router();
const {Meal} = require('../../db/models/meal')
const {User} = require('../../db/models/user')

router.get('/type/:type/:userId', async (req, res) => {
  console.log('triggered')
    let type = req.params.type
    let id = req.params.userId
    //need to update user to match logged in user
    let user = await User.findByPk(id)
    let meals = await user.getMeals({ where: {
        type: type
    }})
    res.render('meals', {
        meals,
        user:{id: id} //Used for main.hbs to render nav bar
    })
})

module.exports = router;