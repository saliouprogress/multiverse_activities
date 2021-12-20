const router = require('express').Router();
const {Meal} = require('../../db/models/meal')

router.delete('/:id', async (req, res) => {
  console.log('route triggered')
    let id = req.params.id
    // console.log('Meal ID', id)
    let mealToDelete = await Meal.findByPk(id)
    // console.log('Meal ID', mealToDelete)
    await mealToDelete.destroy()
    res.send('meal deleted')
});

module.exports = router;