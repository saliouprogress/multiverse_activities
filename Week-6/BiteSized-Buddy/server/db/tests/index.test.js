const {User, Meal} = require('../models/index')

//Performed after generating the seed data
describe('the association between the Models', () => {
  test('association between the User and the meal', async () => {
    const testUser = await User.findByPk(1);
    const testUserMeals = await testUser.getMeals()
    expect(testUserMeals[0].calories).toBe(300)
    expect(testUserMeals[1].name).toBe("Pizza")
  });
});

