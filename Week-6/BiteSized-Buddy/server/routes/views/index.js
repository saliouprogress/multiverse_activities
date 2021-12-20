const router = require('express').Router();
const startingPage = '/login'; //determins homepage

router.get('/', (req, res) => { res.redirect(startingPage) }); // render's home page
router.use('/login', require('./login'));
router.use('/meals', require('./meals'));
router.use('/meal', require('./addMeal'));
router.use('/meals', require('./delete'));
router.use('/meal', require('./updateMeal'));
router.use('/signup', require('./signup'));
router.use('/overview', require('./overview'))
router.use('/meals', require('./filterByType'))
router.use('/meals', require('./filterByCalories.js'))

module.exports = router;
