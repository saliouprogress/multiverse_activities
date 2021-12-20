const router = require('express').Router();

//Allows the User to go the add meal page
router.get('/add/:userId', (req, res, next) => {
  context = {user: {id: req.params.userId}};
  res.render('addMeal', context);
});

module.exports = router;
