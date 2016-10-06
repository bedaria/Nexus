const Sequelize = require('sequelize');
const connection = require('../config/db');

const User = connection.define('user', {
  email:{
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      len: [1, 255]
    }
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cohortId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  profilePic: {
    type: Sequelize.STRING,
    allowNull: false
  },
  bio: {
    type: Sequelize.TEXT,
    allowNull: true
  },
})

module.exports = User;
