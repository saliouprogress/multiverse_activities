const {Type} = require('../models/type');

//Performed after generating the seed data
describe('the functionality of the Type model', () => {
  test('Type instance properties', async () => {
    const testType = await Type.findByPk(1);
    expect(testType.name).toBe('Breakfast');
  });
});
