const router = require('express').Router();
const {User} = require('../../db/models/index');
const {db} = require('../../db/index');
const {QueryTypes} = require('sequelize');

router.get('/weekly/:userId', async (req, res) => {
  // const user = await User.findByPk(req.params.userId)
  //Need to have date property have datatype of date in order to be able to do 'between' date1 and date2 in the query
  // let startDate = new Date();
  // startDate = startDate.toLocaleDateString();
  // const daysBack = 7;
  // const endDate = new Date(startDate.getTime() - (daysBack * 24 * 60 * 60 * 1000);
  // endDate = endDate.toLocaleDateString();
  //Need to make this dynamic instead of fixed dates
  // const weeklyData = await user.getMeals({
  //   where: {
  //     date: {
  //       [Op.between]: [startDate, endDate]
  //     }
  //   }
  // })
  try {
    const weeklyData = await db.query(
      `SELECT date, SUM(calories) as totalCalories FROM Meals WHERE userId = ${req.params.userId} GROUP BY date`,
      {type: QueryTypes.SELECT}
    );
    res.send(weeklyData);
  } catch (err) {
    console.err(err);
  }
});

module.exports = router;
