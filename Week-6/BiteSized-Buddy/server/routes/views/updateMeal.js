const router    = require('express').Router();
const {Meal}  = require('../../db/models/index')

router.get('/:id/edit', async (req, res) => {
    const meal = await Meal.findByPk(req.params.id)
    // console.log(meal)
    res.render("editMeal", {
        meal,
        user: {} //Used for main.hbs to render nav bar
    } )
});


module.exports = router;