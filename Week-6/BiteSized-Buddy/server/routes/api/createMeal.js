const router = require('express').Router();
const {Meal, User} = require('../../db/models/index');
const {check, validationResult} = require('express-validator');

const mealValidation = [
  check('name').notEmpty(),
  check('date').notEmpty().isDate().withMessage('Must be a date, in date format'),
  check('time').notEmpty(),
  check('type').notEmpty().isIn(['Breakfast', 'Lunch', 'Snack', 'Dinner']).withMessage('Food type must be either a breakfast, lunch, snack or dinner'),
  check('calories').notEmpty().isNumeric().withMessage("Must contain a number")
];

//Allows the User to go the add meal page
router.post('/:userId', mealValidation, async (req, res, next) => {
  //If express validatior finds an error, it renders the addMeal page and passes the validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const valError = errors.array();
    return res.render('addMeal', {valError});
  }
  const userId = req.params.userId;
  console.log('meal created', req.body)
  const user = await User.findByPk(userId)
  const meal = await Meal.create(req.body);
  await user.addMeal(meal);
  res.redirect(`/overview/${userId}`);
});

module.exports = router;
