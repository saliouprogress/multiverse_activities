const {Meal} = require('../models/meal');

//Performed after generating the seed data
describe('the functionality of the Meal model', () => {
  test('Meal instance properties', async () => {
    const testMeal = await Meal.findByPk(1);
    expect(testMeal.name).toBe('Scambled Eggs');
    expect(testMeal.date).toBe('2021-12-16');
    expect(testMeal.time).toBe('08:15');
    expect(testMeal.calories).toBe(300);
  });
});
