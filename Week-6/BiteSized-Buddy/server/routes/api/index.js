const router = require('express').Router();

router.use('/image', require('./image'))

router.use('/', require('./updateMeal'));
router.use('/meal', require('./createMeal'));
router.use('/user', require('./user'));
router.use('/chart', require('./chart'))


module.exports = router;
