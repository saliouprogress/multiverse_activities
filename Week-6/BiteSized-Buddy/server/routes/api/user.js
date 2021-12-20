const router = require('express').Router();
const {User} = require('../../db/models');

//Create User
router.post('/', async (req, res) => {
  try {
    console.log("attempting to create user from request data: ", req.body)

    const newUser = await User.create(req.body);

    console.log("User successfully created: ", newUser.dataValues);

    res.json(newUser);
  } catch (err) {
    console.error("error creating user: ", err)
  }
})

//Get User
router.put('/login', async (req, res) => {
  try {
    console.log('request to get user recieved: ', req.body);

    const [user] = await User.findAll({
      where: {
        email: req.body.email,
      }
    });

    if(!user)
      throw new Error('no user with this email');

    if(user.password !== req.body.password)
      throw new Error('password does not match');
      
    console.log("sending: ", user);

    res.json(user);
  } catch (err) {
    console.error("error getting user: ", err)
    //we want to send back to the front-end that an error occured
    //and we want to tell it what the error was to relay it to the user
    //In this case error would occur if no emails matched, or the password didn't match
  }
})

//Edit User
router.post('/edit', async (req, res) => {
  try {

    res.send('request recieved'); //<- change
  } catch (err) {
    console.error("error editing user: ", err)
  }
})

//Delete User (not MVP)
router.delete('/:id', async (req, res) => {
  try {

    res.send('request recieved'); //<- change
  } catch (err) {
    console.error("error deleting user: ", err)
  }
})

module.exports = router;