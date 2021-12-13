const router = require('express').Router()

router.use('/users', require('./users'));
router.use('/items', require('./items'));
router.use('/admin', require('./admin'));

module.exports = router;




















