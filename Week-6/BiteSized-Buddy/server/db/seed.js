const path = require('path');
const fs = require('fs').promises;
const { User, Meal} = require('./models');
const {db} = require('./index')


const seedUser = async () => {
    // find the path to our json file
    const seedPath = path.join(__dirname, 'seed/user.json');
  
    const buffer = await fs.readFile(seedPath);
    const {users} = JSON.parse(String(buffer));
    console.log(users);

    // will create each row for our User Table
    const userPromises = users.map((user) => User.create(user));
  
    await Promise.all(userPromises);
    console.log('User data has been successfully populated into our table');
  };

//   const seedType = async () => {
//     // find the path to our json file
//     const seedPath = path.join(__dirname, 'seed/type.json');
  
//     const buffer = await fs.readFile(seedPath);
//     const {types} = JSON.parse(String(buffer));
  
//     // will create each row for our Type Table
//     const typePromises = types.map((type) => Type.create(type));
  
//     await Promise.all(typePromises);
//     console.log('Type data has been successfully populated into our table');
//   };

  const seedMealWithUser = async () => {
    // find the path to our json file
    const seedPath = path.join(__dirname, 'seed/meal.json');
  
    const buffer = await fs.readFile(seedPath);
    const {meals} = JSON.parse(String(buffer));
  
    let userInstance;
    let mealInstance;
    // will create each row for our Meal Table
    for(meal of meals){
      userInstance = await User.findByPk(meal.userId)
      mealInstance = await Meal.create(meal)
      await userInstance.addMeal(mealInstance)
    };
  
    console.log('Meal data has been successfully populated into our table');
  };



  const seed = async () => {
    console.log('seeding Database...');
    await db.sync({force: true});
    console.log('DB cleared');
    await seedUser();
    // await seedType();
    seedMealWithUser();

    console.log('DB successfully seeded');
  };

  seed();

