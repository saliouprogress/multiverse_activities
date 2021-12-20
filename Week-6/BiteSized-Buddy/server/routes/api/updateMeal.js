const router = require('express').Router();
const {Meal}  = require('../../db/models/index')


//- your routes here
router.post('/updateMeal/:id', async (req, res) => {
    try {
        const meal = await Meal.findByPk(req.params.id)
        // console.log("Req.body", req.body)
        if (req.body.name === "") {
            return res.redirect(`/meal/${meal.id}/edit`);
        } else if (req.body.calories <= 0 ) {
            console.log('Calories should be between 1 and 5000')
            return res.redirect(`/meal/${meal.id}/edit`);
        } else if (req.body.type === "") {
            console.log('Type of meal should be specified')
            return res.redirect(`/meal/${meal.id}/edit`);
        } else if (req.body.time === "") {
            console.log('Time should be specified')
            return res.redirect(`/meal/${meal.id}/edit`);
        } else if (req.body.date === "" || req.body.date < "2021-01-01" || req.body.date > "2021-12-31" ) {
            console.log('Date should be betwee 2021-01-01 and 2021-12-31')
            return res.redirect(`/meal/${meal.id}/edit`);
        }
        const mealUpdated = await meal.update(req.body)
        // console.log('mealUpdated', mealUpdated)
        res.redirect(`/meals/${meal.UserId}`);
    }catch (err) {
        console.log(err)
    }
    
    
});


module.exports = router;

