const router = require('express').Router();
const {User} = require('../../db/models/index');

function calculateTotalCalories(array) {
  let total = 0;
  for (obj of array) {
    total += obj.calories;
  }
  return total;
}

router.get('/:userId', async (req, res, next) => {
  try {
    let date = new Date();
    dateValue = date.toISOString().split('T')[0];
    const user = await User.findByPk(req.params.userId);
    const allMeals = await user.getMeals({where: {date: dateValue}});
    const totalCalories = calculateTotalCalories(allMeals);
    const breakfastMeals = await user.getMeals({where: {type: 'Breakfast', date: dateValue}});
    const dinnerMeals = await user.getMeals({where: {type: 'Dinner', date: dateValue}});
    const lunchMeals = await user.getMeals({where: {type: 'Lunch', date: dateValue}});
    const snackMeals = await user.getMeals({where: {type: 'Snack', date: dateValue}});
    const context = {
      user: {}, //Used for main.hbs to render nav bar
      name: user.name,
      date: date.toLocaleDateString(),
      total: totalCalories,
      breakfast: breakfastMeals,
      dinner: dinnerMeals,
      lunch: lunchMeals,
      snack: snackMeals,
      avatar: user.avatar
    };
    // res.json(context);
    res.render('mainPage', context);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
