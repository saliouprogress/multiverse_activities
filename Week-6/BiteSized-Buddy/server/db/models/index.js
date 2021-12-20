const {User} = require("./user");
const {Meal} = require("./meal");
// const {Type} = require("./type");

Meal.belongsTo(User);
User.hasMany(Meal);

// Meal.belongsTo(Type);
// Type.hasMany(Meal);

module.exports = {User, Meal};
