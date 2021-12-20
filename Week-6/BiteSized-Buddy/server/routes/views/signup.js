const router = require('express').Router();

router.get('/', (req, res) => {
  try{
    res.render('signup');
  } catch (err) {
    next(err);
  }
})

module.exports = router;