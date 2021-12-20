const {User} = require('../models/user');

//Performed after generating the seed data
describe('the functionality of the User model', () => {
  test('User instance properties', async () => {
    const testUser = await User.findByPk(1);
    expect(testUser.name).toBe('Jorge Flores');
    expect(testUser.email).toBe('jorge@bitesized-buddy.com');
    expect(testUser.password).toBe('bitesized');
    expect(testUser.age).toBe(20);
  });
});
