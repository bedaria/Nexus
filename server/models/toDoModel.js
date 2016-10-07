const Sequelize = require('sequelize');
const connection = require('../config/db');

const ToDo = connection.define('todo', {
  toDo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
  }
});

module.exports = ToDo;
