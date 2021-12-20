const {db, DataTypes, Model} = require("../index");

class User extends Model {}

User.init(
  { 
    name: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
    },
    email: { 
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    password: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    age: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            min: 1
        }
    },
    avatar: { 
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'https://i.ibb.co/vQZBWnv/Screenshot-2021-12-15-11-31-02-AM.png',
      validate: {
          notEmpty: false
      }
  },
  },
  {
    sequelize: db,
    timestamps: false,
  }
);

module.exports = {User};
