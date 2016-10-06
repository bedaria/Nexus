const Sequelize = require('sequelize');
const connection = require('../config/db');

const ToDo = connection.define('user', {
  toDo: {
    type: Sequelize.VARCHAR,
    complete: Sequelize.BOOLEAN
  },
  userId: {
    type: Sequelize.INTEGER,
  },
});

module.exports = ToDo;
