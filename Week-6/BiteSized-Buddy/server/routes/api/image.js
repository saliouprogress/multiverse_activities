const router = require('express').Router();
const {User} = require('../../db/models/index');

router.put('/:userId/:link', async (req, res) => {
  // try {
  // const user = User.findByPk(req.params.userId)
  // const link = req.params.link
  // user.update({avatar: link})
  res.sendStatus(200)
  // } catch (err){
  //   console.log(err)
  // }
});

module.exports = router;
